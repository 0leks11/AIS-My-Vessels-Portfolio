// src/utils/constructTree.ts
import { TreeItem } from '../types/githubTypes';
interface TreeNode {
    name: string;
    path: string;
    type: 'file' | 'directory';
    children?: TreeNode[];
  }
  
  export const constructTree = (treeData: TreeItem[]): TreeNode[] => {
    const tree: { [key: string]: TreeNode } = {};
    const roots: TreeNode[] = [];
  
    treeData.forEach((item) => {
      const parts = item.path.split('/');
      const name = parts.pop()!;
      const path = item.path;
      const type = item.type === 'tree' ? 'directory' : 'file';
  
      const node: TreeNode = { name, path, type };
  
      if (type === 'directory') {
        node.children = [];
      }
  
      tree[path] = node;
  
      if (parts.length === 0) {
        roots.push(node);
      } else {
        const parentPath = parts.join('/');
        const parentNode = tree[parentPath];
        if (parentNode && parentNode.children) {
          parentNode.children.push(node);
        }
      }
    });
  
    return roots;
  };
