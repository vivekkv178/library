import React from "react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

import TabsSection from "./TabsSection";
import DevImg from "../Hero/HeroImg";

const meta: Meta<typeof TabsSection> = {
  title: "UI-Components/TabsSection",
  component: TabsSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TabsSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "youremail@email.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 10 Mar, 1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321 Blue Avenue, NY, USA",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Master of Arts",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Ph.D in Computer Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Corporation",
        role: "Senior Developer",
        years: "2020 - 2022",
      },
      {
        company: "Tech Innovators",
        role: "Lead Developer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const getData = (arr: any[], title: string) => {
  return arr.find((item: { title: any }) => item.title === title);
};

export const Primary: Story = {
  args: {
    tabs: [
      {
        tabImage: (
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/about/developer.png"
          />
        ),
        tabContent: (
          <div className="text-center xl:text-left">
            <h3 className="h3 mb-4">
              Unmatched Service Quality for Over 10 Years
            </h3>
            <p className="subtitle max-w-xl mx-auto xl:mx-0">
              I specialize in crafting intuitive websites with cutting-edge
              technology, delivering dynamic and engaging user experiences.
            </p>
            {/* icons */}
            <div className="grid xl:grid-cols-2 gap-4 mb-12">
              {infoData.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-x-4 mx-auto xl:mx-0"
                    key={index}
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div>{item.text}</div>
                  </div>
                );
              })}
            </div>
            {/* languages */}
            <div className="flex flex-col gap-y-2">
              <div className="text-primary">Language Skill</div>
              <div className="border-b border-border"></div>
              <div>English, French, Spanish, Italian</div>
            </div>
          </div>
        ),
        tabTrigger: "Personal Info",
        tabTriggerValue: "personal",
      },
      {
        tabImage: (
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/about/developer.png"
          />
        ),
        tabContent: (
          <div>
            <h3 className="h3 mb-8 text-center xl:text-left">
              My Awesome Journey
            </h3>
            {/* experience & education wrapper */}
            <div className="grid md:grid-cols-2 gap-y-8">
              {/* experience */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <Briefcase />
                  <h4 className="capitalize font-medium">
                    {getData(qualificationData, "experience").title}
                  </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                  {getData(qualificationData, "experience").data.map(
                    (item: any, index: number) => {
                      const { company, role, years } = item;
                      return (
                        <div className="flex gap-x-8 group" key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <div className="font-semibold text-xl leading-none mb-2">
                              {company}
                            </div>
                            <div className="text-lg leading-none text-muted-foreground mb-4">
                              {role}
                            </div>
                            <div className="text-base font-medium">{years}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {/* education */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                  <GraduationCap size={28} />
                  <h4 className="capitalize font-medium">
                    {getData(qualificationData, "education").title}
                  </h4>
                </div>
                {/* list */}
                <div className="flex flex-col gap-y-8">
                  {getData(qualificationData, "education").data.map(
                    (item: any, index: number) => {
                      const { university, qualification, years } = item;
                      return (
                        <div className="flex gap-x-8 group" key={index}>
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div>
                            <div className="font-semibold text-xl leading-none mb-2">
                              {university}
                            </div>
                            <div className="text-lg leading-none text-muted-foreground mb-4">
                              {qualification}
                            </div>
                            <div className="text-base font-medium">{years}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        ),
        tabTrigger: "Qualifications",
        tabTriggerValue: "qualifications",
      },
      {
        tabImage: (
          <DevImg
            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            imgSrc="/about/developer.png"
          />
        ),
        tabContent: (
          <div className="text-center xl:text-left">
            <h3 className="h3 mb-8">What I Use Everyday</h3>
            {/* skills */}
            <div className="mb-16">
              <h4 className="text-xl font-semibold mb-2">Skills</h4>
              <div className="border-b border-border mb-4"></div>
              {/* skill list */}
              <div>
                {getData(skillData, "skills").data.map(
                  (item: any, index: number) => {
                    const { name } = item;
                    return (
                      <div
                        className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                        key={index}
                      >
                        <div className="font-medium">{name}</div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {/* tools */}
            <div>
              <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
              <div className="border-b border-border mb-4"></div>
              {/* tool list */}
              <div className="flex gap-x-8 justify-center xl:justify-start">
                {getData(skillData, "tools").data.map(
                  (
                    item: { imgPath: any },
                    index: React.Key | null | undefined
                  ) => {
                    const { imgPath } = item;
                    return (
                      <div key={index}>
                        <img src={imgPath} width={48} height={48} alt="" />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        ),
        tabTrigger: "Skills",
        tabTriggerValue: "skills",
      },
    ],
    sectionTitle: "About Me",
  },
};
