import React from "react";

export default function ProjectTable({
  role,
  tools,
  url,
  description,
  urlName,
}) {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-11/12 md:w-3/4 m-auto pb-16">
      <div className="col-span-2 md:col-span-1">
        <div class="flex">
          <div class="flex-none w-28 h-14">
            <h2 className="text-white text-xl font-mono font-bold">Role</h2>
          </div>
          <div class="flex-initial w-64 ...">
            <div className="text-white font-mono">{role}</div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-none w-28 h-14">
            <h2 className="text-white text-xl font-mono font-bold">Tools</h2>
          </div>
          <div class="flex-initial w-64 ...">
            <div className="text-white font-mono">{tools}</div>
          </div>
        </div>
        <div class="flex pt-4">
          <div class="flex-none w-28 h-14">
            <h2 className="text-white text-xl font-mono font-bold">URL</h2>
          </div>
          <div class="flex-initial w-64 ...">
            <a
              href={url}
              target={"_blank"}
              rel="noreferrer"
              className="text-white font-mono underline hover:text-ncc-bakermiller"
            >
              {urlName}
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <p className="text-white font-mono">{description}</p>
      </div>
    </div>
  );
}
