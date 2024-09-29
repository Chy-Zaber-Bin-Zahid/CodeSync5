import Meet from "@/components/meetTheTeam/Meet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet The Team | CodeSync5 ",
  description: "CodeSync5 Meet The Team Page",
};

function MeetTheTeam() {
    return (
        <div id="MeetTheTeam-component" className="w-full px-3 overflow-hidden bg-gradient-to-br from-teal-50 to-white">
            <Meet/>
        </div>
    )
}

export default MeetTheTeam