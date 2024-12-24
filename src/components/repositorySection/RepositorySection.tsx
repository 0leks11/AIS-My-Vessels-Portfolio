// src/components/repositorySection/RepositorySection.tsx
import React from "react";
import UserProfile from "./UserProfile";
import Sidebar from "./Sidebar";
import FileContent from "./FileContent";
import { Collapsible } from "../resumeSection/Collapsible";
import { useRepositoryTree } from "../../hooks/useRepositoryTree";
import { useUserProfile } from "../../hooks/useUserProfile";
import "tailwindcss/tailwind.css";
import "@primer/css/dist/primer.css";

import { constructTree } from "../../utils/constructTree";

interface RepositorySectionProps {
  className?: string;
}

const RepositorySection: React.FC<RepositorySectionProps> = ({ className }) => {
  const { treeData, loading } = useRepositoryTree();
  const userProfile = useUserProfile();
  const [currentFileName, setCurrentFileName] =
    React.useState<string>("README.md");

  const handleSelectFile = (path: string) => {
    setCurrentFileName(path);
  };

  const tree = React.useMemo(() => constructTree(treeData), [treeData]);

  return (
    <section
      className={`repository-section min-w-[320px] max-w-4xl mx-auto p-3 md:p-6 bg-slate-100 rounded-lg shadow-md ${className}`}
    >
      <div>
        <Collapsible
          button={
            <p className="text-sm px-3 py-1">
              This section explains how this component works and the
              technologies behind it. Here, you will find a my GitHub
              repository.
            </p>
          }
          content={
            <div className="text-base font-medium px-3 py-1">
              <p className=" py-2">
                Data flows seamlessly through AIS (Automatic Identification
                System) antennas installed on each vessel. These antennas
                transmit information either to nearby shore-based AIS stations
                along the coastline or directly to satellites. Our service&nbsp;
                <a
                  href="https://github.com/0leks11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:text-indigo-800 no-underline"
                >
                  github.com/0leks11
                </a>
                &nbsp; leverages the shore stations, offering free access by
                relying on a 200-kilometer reception zone. This means that while
                the system efficiently captures vessel data within this range,
                signals may occasionally drop if a vessel moves beyond the
                coverage area. Although alternative satellite-based services are
                available, they typically come with additional costs.
              </p>
            </div>
          }
        />
        {userProfile && (
          <div className="mr-2">
            <UserProfile userProfile={userProfile} />
          </div>
        )}
        <div className="flex">
          {!loading && (
            <div
              className="w-1/5 bg-slate-100 border-r border-gray-300 mt-1"
              style={{ height: "calc(100vh - 100px)" }}
            >
              <Sidebar treeData={tree} onSelectFile={handleSelectFile} />
            </div>
          )}
          <div className="w-4/5 p-2">
            {currentFileName ? (
              <FileContent currentFileName={currentFileName} />
            ) : (
              <p>Select a file in the sidebar to view its contents.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepositorySection;
