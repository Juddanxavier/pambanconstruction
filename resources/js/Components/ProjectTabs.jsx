import React from "react";
import LocationMap from '../Components/LocationMap'
import ProjectUpdates from '../Components/ProjectUpdates'
import SpecificationsAccordion from '@/Components/SpecificationsAccordion'

const ProjectTabs = (props) => {
  const mapProps = props.mapProps
  const updates = props.updates
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap flex-row border-b-2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto">
              <a
                className={
                  "text-md font-bold capitialize pl-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-blue-600 border-b-2 border-b-blue-600"
                    : "text-slate-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Constructions Specifications
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto">
              <a
                className={
                  "text-md font-bold capitalize px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-blue-600 border-b-2 border-b-blue-600"
                    : "text-slate-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Location
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto">
              <a
                className={
                  "text-md font-bold capitalize px-5 py-3 block leading-normal " +
                  (openTab === 3
                    ? "text-blue-600 border-b-2 border-b-blue-600"
                    : "text-slate-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Project Updates
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <SpecificationsAccordion />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <LocationMap {...mapProps} />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ProjectUpdates updates={updates}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectTabs
// export default function ProjectTabs(data, mapProps, updates) {
//   return (
//     <>
//     <Tabs color="slate" data mapProps updates/>
//     </>
//   );
// }