import Meet from "@/components/meetTheTeam/Meet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet The Team | CodeSync5 LTD",
  description: "CodeSync LTD Meet The Team Page",
};

function MeetTheTeam() {
    return (
        <div id="MeetTheTeam-component" className="w-full px-3 overflow-hidden bg-gradient-to-br from-teal-50 to-sky-100">
            <Meet/>
        </div>
    )
}

export default MeetTheTeam