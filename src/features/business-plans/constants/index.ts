import type { BusinessPlanStep, Template } from "../types";

export const LEGAL_DISCLOSURES = (
  index: number,
  YOUR_COMPANY_NAME: string = "{1-YOUR_COMPANY_NAME}"
) =>
  [
    `This business plan contains confidential information created by ${YOUR_COMPANY_NAME}. This business plan may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
    `This business plan contains proprietary and confidential information created by ${YOUR_COMPANY_NAME}. This business plan is issued exclusively for informational purposes, and may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
    `This business plan contains proprietary and confidential information created by ${YOUR_COMPANY_NAME}. Please make sure to complete the Non Disclosure Agreement before reading the contents of this business plan. This business plan is issued exclusively for informational purposes, and may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
  ][index];

export const STEPS_DATA: BusinessPlanStep[] = [
  {
    stepNumber: 1,
    hasOutput: false,
    stepTitle: "General Business Plan Inputs",
    sections: [
      {
        sectionId: "1.1",
        sectionTitle: "Founder & Company Identification",
        questions: [
          {
            reference: "1-1",
            type: "text",
            label: () => "First Name and Last Name",
            key: "YOUR_FIRST_NAME_AND_LAST_NAME",
            required: true,
            helperText: "The name you want to appear on your business plan.",
          },
          {
            reference: "1-2",
            type: "text",
            label: () => "Company Name",
            key: "YOUR_COMPANY_NAME",
            required: true,
            helperText: "The legal or operating name of the company.",
          },
          {
            reference: "1-3",
            type: "textarea",
            label: () => "Product or Service Description (Max 15 words)",
            key: "YOUR_PRODUCT_OR_SERVICE_DESCRIPTION",
            required: true,
            helperText:
              "A concise, easy-to-understand description (15 words or less). Please capitalize the first word.",
          },
          {
            reference: "1-12",
            type: "select",
            label: () => "Primary Reader of this Business Plan",
            key: "YOUR_BUSINESS_PLAN_READER",
            required: true,
            helperText:
              "Identify the target audience (e.g., potential investors, bank loan officer, internal management).",
            options: [
              { label: "Yourself", value: "Yourself" },
              { label: "Your team", value: "Your team" },
              { label: "Your board", value: "Your board" },
              { label: "Your boss", value: "Your boss" },
              { label: "New hires", value: "New hires" },
              { label: "Donors", value: "Donors" },
              { label: "Customers", value: "Customers" },
              {
                label: "Business partners",
                value: "Business partners",
              },
            ],
          },
          {
            reference: "1-14",
            type: "select",
            label: () => "Year Company Founded",
            key: "YOUR_YEAR_FOUNDED",
            required: true,
            helperText:
              "The year your company was officially established or started operating.",
            options: [
              { label: "2023", value: "2023" },
              { label: "2024", value: "2024" },
              { label: "2025", value: "2025" },
              { label: "2026", value: "2026" },
              { label: "2027", value: "2027" },
            ],
          },
          {
            reference: "1-15",
            type: "text",
            label: () => "Industry Name",
            key: "YOUR_INDUSTRY",
            required: true,
            helperText:
              "The industry your company operates in (e.g., FinTech, E-commerce, Hospitality).",
          },
          {
            reference: "1-67",
            type: "textarea",
            label: () => "Company Mission Statement",
            key: "YOUR_MISSION_STATEMENT",
            required: true,
            helperText:
              "Your company's overarching purpose and goal (e.g., 'To organize the world's information and make it universally accessible & useful.')",
          },
        ],
      },
      {
        sectionId: "1.2",
        sectionTitle: "Contact and Location Details",
        questions: [
          {
            reference: "1-5",
            type: "text",
            label: () => "Email Address",
            key: "YOUR_EMAIL_ADDRESS",
            required: true,
            helperText: "The primary business email address.",
          },
          {
            reference: "1-6",
            type: "text",
            label: () => "Internet Address (URL)",
            key: "YOUR_INTERNET_ADDRESS",
            required: false,
            helperText:
              "The website or primary internet address of your business.",
          },
          {
            reference: "1-7",
            type: "radio",
            label: () => "Have you created a website for your company?",
            key: "YOUR_HAVE_YOU_CREATED_INTERNET_ADDRESS",
            required: false,
            helperText: "Check if your company has an active, live website.",
          },
          {
            reference: "1-8",
            type: "text",
            label: () => "Business Address (City/State/Country)",
            key: "YOUR_POST_ADDRESS",
            required: false,
            helperText:
              "The primary physical address of your business. List city names if more than one location.",
          },
          {
            reference: "1-9",
            type: "textarea",
            label: () => "Address Choice Rationale",
            key: "YOUR_ADDRESS_CHOICE_REASON",
            required: false,
            helperText:
              "Explain why you chose this location (e.g., proximity to market, tax benefits, specialized zone incentives).",
          },
          {
            reference: "1-10",
            type: "text",
            label: () => "Phone Number",
            key: "YOUR_PHONE_NUMBER",
            required: true,
            helperText:
              "The business phone number (can be a cell phone if a dedicated line is not available).",
          },
          {
            reference: "1-11",
            type: "select",
            label: () => "Primary Country for Filing Taxes",
            key: "YOUR_COUNTRY_YOUR_BUSINESS_IS_HEADQUARTERED_IN",
            required: false,
            helperText:
              "The country where you will be filing the primary or only corporate taxes.",
            options: [{ label: "Philippines", value: "Philippines" }],
          },
          {
            reference: "1-83",
            type: "textarea",
            label: () => "Reason for Location Choice",
            key: "YOUR_LOCATION_REASON_DETAILED",
            required: false,
            helperText:
              "Further detail on the strategic reasons for your company's location.",
          },
        ],
      },
      {
        sectionId: "1.3",
        sectionTitle: "Legal and Financial Structure",
        questions: [
          {
            reference: "1-4",
            type: "radio",
            label: () =>
              "Is the company name already in use, and is the web address taken?",
            key: "YOUR_COMPANY_NAME_IN_USE",
            required: false,
            helperText:
              "Check if a conflicting name or taken domain is a potential issue.",
          },
          {
            reference: "1-13",
            type: "radio",
            label: () =>
              "Do you plan on using this business plan to raise money?",
            key: "YOUR_PLAN_TO_RAISE_MONEY",
            required: false,
            helperText:
              "Indicate if this document is intended for investors or loan providers.",
          },
          {
            reference: "1-16",
            type: "text",
            label: () => "Legal Structure of Company",
            key: "YOUR_LEGAL_STRUCTURE",
            required: false,
            helperText:
              "e.g., Sole Proprietorship, LLC, Corporation (S-Corp, C-Corp), Partnership, etc.",
            options: [
              {
                label: "Sole Proprietorship",
                value: "Sole Proprietorship",
              },
              { label: "Partnership", value: "Partnership" },
              {
                label: "Limited Liability Corporation",
                value: "Limited Liability Corporation",
              },
              { label: "Corporation", value: "Corporation" },
              { label: "S Corporation", value: "S Corporation" },
            ],
          },
          {
            reference: "1-20",
            type: "text",
            label: () => "Company Owner(s)",
            key: "YOUR_OWNER_OF_COMPANY",
            required: false,
            helperText:
              "List the names of the person(s) or entities that legally own the company.",
          },
          {
            reference: "1-22",
            type: "radio",
            label: () => "Have you registered your company name?",
            key: "YOUR_REGISTERED_COMPANY_NAME",
            required: false,
            helperText:
              "Check if the name registration process is complete (e.g., DBA, incorporation papers).",
          },
          {
            reference: "1-23",
            type: "radio",
            label: () => "Do you have business insurance?",
            key: "YOUR_BUSINESS_INSURANCE",
            required: false,
            helperText:
              "Check if you have liability, property, or other relevant business insurance.",
          },
          {
            reference: "1-24",
            type: "radio",
            label: () => "Have you looked into getting a government grant?",
            key: "YOUR_GOVERNMENT_GRANT",
            required: false,
            helperText:
              "Check if you have explored options for government funding/grants.",
          },
          {
            reference: "1-84",
            type: "radio",
            label: () =>
              "Do you need a license to operate, and has it been received?",
            key: "YOUR_LICENSE_RECEIVED",
            required: false,
            helperText:
              "Check if operational licenses (e.g., liquor, health, professional) are required and secured.",
          },
          {
            reference: "1-85",
            type: "radio",
            label: () => "Have you set up a consultation with a tax lawyer?",
            key: "YOUR_TAX_LAWYER_CONSULTATION",
            required: false,
            helperText:
              "Indicate if you have sought professional tax advice for your business structure.",
          },
        ],
      },
      {
        sectionId: "1.4",
        sectionTitle: "Intellectual Property and Confidentiality",
        questions: [
          {
            reference: "1-17",
            type: "radio",
            label: () =>
              "Have you filed a patent(s) for the product or service?",
            key: "YOUR_FILED_PATENT",
            required: false,
            helperText: "Check if a patent application is filed or granted.",
          },
          {
            reference: "1-18",
            type: "radio",
            label: () =>
              "Have you filed for a copyright(s) for the product or service?",
            key: "YOUR_FILED_COPYRIGHT",
            required: false,
            helperText: "Check if creative works are protected by copyright.",
          },
          {
            reference: "1-19",
            type: "radio",
            label: () =>
              "Have you filed a trademark(s) for the product or service?",
            key: "YOUR_FILED_TRADEMARK",
            required: false,
            helperText:
              "Check if brand elements (name, logo) are protected by trademark.",
          },
          {
            reference: "1-21",
            type: "radio",
            label: () =>
              "Do you plan on using Non-Disclosure Agreements (NDA) with readers?",
            key: "YOUR_PLAN_ON_NDA",
            required: false,
            helperText:
              "Check if you will require people reading the business plan to sign an NDA.",
          },
        ],
      },
      {
        sectionId: "1.5",
        sectionTitle: "Company Team Members (Optional)",
        questions: [
          {
            reference: "1-26",
            type: "text",
            label: () => "First Employee's Name",
            key: "YOUR_FIRST_EMPLOYEES_NAME",
            required: false,
            helperText:
              "If you have more than 1 person in your company, list the first employee's name.",
          },
          {
            reference: "1-27",
            type: "text",
            label: () => "Second Employee's Name",
            key: "YOUR_SECOND_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 2 people in your company, list the second employee's name.",
          },
          {
            reference: "1-28",
            type: "text",
            label: () => "Third Employee's Name",
            key: "YOUR_THIRD_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 3 people in your company, list the third employee's name.",
          },
          {
            reference: "1-29",
            type: "text",
            label: () => "Fourth Employee's Name",
            key: "YOUR_FOURTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 4 people in your company, list the fourth employee's name.",
          },
          {
            reference: "1-30",
            type: "text",
            label: () => "Fifth Employee's Name",
            key: "YOUR_FIFTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 5 people in your company, list the fifth employee's name.",
          },
          {
            reference: "1-31",
            type: "text",
            label: () => "Sixth Employee's Name",
            key: "YOUR_SIXTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 6 people in your company, list the sixth employee's name.",
          },
          {
            reference: "1-32",
            type: "text",
            label: () => "Seventh Employee's Name",
            key: "YOUR_SEVENTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 7 people in your company, list the seventh employee's name.",
          },
          {
            reference: "1-33",
            type: "text",
            label: () => "Eighth Employee's Name",
            key: "YOUR_EIGTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 8 people in your company, list the eighth employee's name.",
          },
          {
            reference: "1-34",
            type: "text",
            label: () => "Ninth Employee's Name",
            key: "YOUR_NINTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 9 people in your company, list the ninth employee's name.",
          },
          {
            reference: "1-35",
            type: "text",
            label: () => "Tenth Employee's Name",
            key: "YOUR_TENTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "If you have more than 10 people in your company, list the tenth employee's name.",
          },
        ],
      },
      {
        sectionId: "1.6",
        sectionTitle: "Competitive Analysis: Strengths",
        questions: [
          {
            reference: "1-68",
            type: "textarea",
            label: () => "Number 1 Strength vs. Competition",
            key: "YOUR_STRENGTH_1",
            required: true,
            helperText: "Your company's primary competitive advantage.",
          },
          {
            reference: "1-69",
            type: "textarea",
            label: () => "Number 2 Strength vs. Competition",
            key: "YOUR_STRENGTH_2",
            required: true,
            helperText:
              "Your company's second most important competitive advantage.",
          },
          {
            reference: "1-70",
            type: "textarea",
            label: () => "Number 3 Strength vs. Competition",
            key: "YOUR_STRENGTH_3",
            required: true,
            helperText:
              "Your company's third most important competitive advantage.",
          },
          {
            reference: "1-71",
            type: "textarea",
            label: () => "Number 4 Strength vs. Competition",
            key: "YOUR_STRENGTH_4",
            required: false,
            helperText:
              "Optional: Your company's fourth competitive advantage.",
          },
          {
            reference: "1-72",
            type: "textarea",
            label: () => "Number 5 Strength vs. Competition",
            key: "YOUR_STRENGTH_5",
            required: false,
            helperText: "Optional: Your company's fifth competitive advantage.",
          },
        ],
      },
      {
        sectionId: "1.7",
        sectionTitle: "Competitive Analysis: Weaknesses & Mitigation",
        questions: [
          {
            reference: "1-73",
            type: "textarea",
            label: () => "Number 1 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_1",
            required: true,
            helperText:
              "Your company's primary vulnerability compared to rivals.",
          },
          {
            reference: "1-74",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 1",
            key: "YOUR_DECREASE_RISK_WEAKNESS_1",
            required: true,
            helperText:
              "How you plan to reduce the risk associated with your Number 1 Weakness.",
          },
          {
            reference: "1-75",
            type: "textarea",
            label: () => "Number 2 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_2",
            required: true,
            helperText:
              "Your company's second vulnerability compared to rivals.",
          },
          {
            reference: "1-76",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 2",
            key: "YOUR_DECREASE_RISK_WEAKNESS_2",
            required: true,
            helperText:
              "How you plan to reduce the risk associated with your Number 2 Weakness.",
          },
          {
            reference: "1-77",
            type: "textarea",
            label: () => "Number 3 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_3",
            required: true,
            helperText:
              "Your company's third vulnerability compared to rivals.",
          },
          {
            reference: "1-78",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 3",
            key: "YOUR_DECREASE_RISK_WEAKNESS_3",
            required: true,
            helperText:
              "How you plan to reduce the risk associated with your Number 3 Weakness.",
          },
          {
            reference: "1-79",
            type: "textarea",
            label: () => "Number 4 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_4",
            required: false,
            helperText: "Optional: Your company's fourth vulnerability.",
          },
          {
            reference: "1-80",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 4",
            key: "YOUR_DECREASE_RISK_WEAKNESS_4",
            required: false,
            helperText:
              "Optional: How you plan to reduce the risk associated with your Number 4 Weakness.",
          },
          {
            reference: "1-81",
            type: "textarea",
            label: () => "Number 5 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_5",
            required: false,
            helperText: "Optional: Your company's fifth vulnerability.",
          },
          {
            reference: "1-82",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 5",
            key: "YOUR_DECREASE_RISK_WEAKNESS_5",
            required: false,
            helperText:
              "Optional: How you plan to reduce the risk associated with your Number 5 Weakness.",
          },
        ],
      },
      {
        sectionId: "1.8",
        sectionTitle: "Business Plan Project Management (Team and Deadlines)",
        questions: [
          {
            reference: "1-66",
            type: "radio",
            label: () =>
              "Have you thought about attending local free Meetup events in your country?",
            key: "YOUR_ATTEND_MEETUP_EVENTS",
            required: false,
            helperText:
              "Check if you have explored local networking opportunities.",
          },
          {
            reference: "1-36",
            type: "select",
            label: () => "Owner of General Business Plan Inputs (Step 1)",
            key: "STEP_1_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "If multiple people are involved, who is responsible for completing this step?",
          },
          {
            reference: "1-37",
            type: "date",
            label: () => "Deadline for General Business Plan Inputs (Step 1)",
            key: "STEP_1_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 1.",
          },
          {
            reference: "1-38",
            type: "select",
            label: () => "Owner of Cover Page (Step 2)",
            key: "STEP_2_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText: "Who is responsible for completing the Cover Page.",
          },
          {
            reference: "1-39",
            type: "date",
            label: () => "Deadline for Cover Page (Step 2)",
            key: "STEP_2_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 2.",
          },
          {
            reference: "1-40",
            type: "select",
            label: () => "Owner of Executive Summary (Step 3)",
            key: "STEP_3_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Executive Summary.",
          },
          {
            reference: "1-41",
            type: "date",
            label: () => "Deadline for Executive Summary (Step 3)",
            key: "STEP_3_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 3.",
          },
          {
            reference: "1-42",
            type: "select",
            label: () => "Owner of Management Section (Step 4)",
            key: "STEP_4_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Management section.",
          },
          {
            reference: "1-43",
            type: "date",
            label: () => "Deadline for Management Section (Step 4)",
            key: "STEP_4_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 4.",
          },
          {
            reference: "1-44",
            type: "select",
            label: () => "Owner of Product/Service Section (Step 5)",
            key: "STEP_5_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Product/Service section.",
          },
          {
            reference: "1-45",
            type: "date",
            label: () => "Deadline for Product/Service Section (Step 5)",
            key: "STEP_5_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 5.",
          },
          {
            reference: "1-46",
            type: "select",
            label: () => "Owner of Customer & Market Section (Step 6)",
            key: "STEP_6_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Customer & Market section.",
          },
          {
            reference: "1-47",
            type: "date",
            label: () => "Deadline for Customer & Market Section (Step 6)",
            key: "STEP_6_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 6.",
          },
          {
            reference: "1-48",
            type: "select",
            label: () => "Owner of Competition Section (Step 7)",
            key: "STEP_7_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Competition section.",
          },
          {
            reference: "1-49",
            type: "date",
            label: () => "Deadline for Competition Section (Step 7)",
            key: "STEP_7_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 7.",
          },
          {
            reference: "1-50",
            type: "select",
            label: () => "Owner of Go-to Market Strategy (Step 8)",
            key: "STEP_8_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Go-to Market Strategy section.",
          },
          {
            reference: "1-51",
            type: "date",
            label: () => "Deadline for Go-to Market Strategy (Step 8)",
            key: "STEP_8_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 8.",
          },
          {
            reference: "1-52",
            type: "select",
            label: () => "Owner of Sales & Marketing Section (Step 9)",
            key: "STEP_9_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Sales & Marketing section.",
          },
          {
            reference: "1-53",
            type: "date",
            label: () => "Deadline for Sales & Marketing Section (Step 9)",
            key: "STEP_9_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 9.",
          },
          {
            reference: "1-54",
            type: "select",
            label: () => "Owner of Milestones Section (Step 10)",
            key: "STEP_10_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Milestones section.",
          },
          {
            reference: "1-55",
            type: "date",
            label: () => "Deadline for Milestones Section (Step 10)",
            key: "STEP_10_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 10.",
          },
          {
            reference: "1-56",
            type: "select",
            label: () => "Owner of Financials Section (Step 11)",
            key: "STEP_11_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Financials section.",
          },
          {
            reference: "1-57",
            type: "date",
            label: () => "Deadline for Financials Section (Step 11)",
            key: "STEP_11_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 11.",
          },
          {
            reference: "1-58",
            type: "select",
            label: () => "Owner of Appendix Section (Step 12)",
            key: "STEP_12_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Appendix section.",
          },
          {
            reference: "1-59",
            type: "date",
            label: () => "Deadline for Appendix Section (Step 12)",
            key: "STEP_12_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 12.",
          },
          {
            reference: "1-60",
            type: "select",
            label: () => "Owner of Other / Miscellaneous Section (Step 13)",
            key: "STEP_13_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for completing the Other / Miscellaneous section.",
          },
          {
            reference: "1-61",
            type: "date",
            label: () => "Deadline for Other / Miscellaneous Section (Step 13)",
            key: "STEP_13_DUE_DATE_IS",
            required: false,
            helperText: "The target completion date for Step 13.",
          },
          {
            reference: "1-62",
            type: "select",
            label: () => "Owner of FINAL OUTPUT Business Plan Formatting",
            key: "STEP_FINAL_OUTPUT_BUSINESS_PLAN_IS_ASSIGNED_TO",
            required: false,
            values: {
              keys: [
                "YOUR_FIRST_EMPLOYEES_NAME",
                "YOUR_SECOND_EMPLOYEE_NAME",
                "YOUR_THIRD_EMPLOYEE_NAME",
                "YOUR_FOURTH_EMPLOYEE_NAME",
                "YOUR_FIFTH_EMPLOYEE_NAME",
                "YOUR_SIXTH_EMPLOYEE_NAME",
                "YOUR_SEVENTH_EMPLOYEE_NAME",
                "YOUR_EIGTH_EMPLOYEE_NAME",
                "YOUR_NINTH_EMPLOYEE_NAME",
                "YOUR_TENTH_EMPLOYEE_NAME",
              ],
            },
            helperText:
              "Who is responsible for the final formatting and compilation of the business plan document.",
          },
          {
            reference: "1-63",
            type: "date",
            label: () => "Deadline for FINAL OUTPUT Business Plan",
            key: "STEP_FINAL_OUTPUT_BUSINESS_PLAN_DUE_DATE_IS",
            required: false,
            helperText:
              "The final target completion date for the entire business plan document.",
          },
          {
            reference: "1-64",
            type: "text",
            label: () => "Owner of FINAL OUTPUT Presentation Slides Formatting",
            key: "STEP_FINAL_OUTPUT_PRESENTATION_SLIDES_IS_ASSIGNED_TO",
            required: false,
            helperText:
              "Who is responsible for the final formatting and compilation of the presentation slides.",
          },
          {
            reference: "1-65",
            type: "date",
            label: () => "Deadline for FINAL OUTPUT Presentation Slides",
            key: "STEP_FINAL_OUTPUT_PRESENTATION_SLIDES_DUE_DATE_IS",
            required: false,
            helperText:
              "The final target completion date for the presentation slides.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 2,
    hasOutput: true,
    stepTitle: "Cover Page and Formal Details",
    sections: [
      {
        sectionId: "2.1",
        sectionTitle: "Cover Page Elements",
        questions: [
          {
            reference: "2-1",
            type: "radio",
            label: () => "Do you have company logo?",
            key: "YOUR_COMPANY_LOGO_QUESTION",
            required: true,
            helperText: "If you have a logo ready for the cover page.",
          },
          {
            reference: "2-2",
            type: "text",
            label: () => "Upload your company logo",
            key: "YOUR_LOGO",
            required: false,
            helperText:
              "Upload the logo(s) you are considering for the cover page.",
          },
          {
            reference: "2-3",
            type: "date",
            label: () => "Cover Page Date",
            key: "YOUR_COVER_PAGE_DATE",
            required: true,
            helperText:
              "The formal date you want to appear on the business plan cover page.",
          },
          {
            reference: "2-4",
            type: "select",
            label: () => "Legal Disclosure",
            key: "YOUR_COVER_PAGE_LEGAL_DISCLOSURE",
            required: true,
            helperText:
              "Select whether you want to include a legal disclosure (e.g., confidentiality statement) at the bottom of the cover page.",
            options: [
              {
                label: "Template 1",
                value: 0,
              },
              {
                label: "Template 2",
                value: 1,
              },
              {
                label: "Template 3",
                value: 2,
              },
            ],
            hasTemplate: true,
            values: { key: "YOUR_COMPANY_NAME" },
            getTemplate: (
              index: 0 | 1 | 2,
              YOUR_COMPANY_NAME: string
            ): string => {
              const templates = LEGAL_DISCLOSURES(index, YOUR_COMPANY_NAME);
              return templates || "";
            },
          },
        ],
      },
    ],
    outputs: {
      YOUR_COMPANY_NAME: {
        title: () => "Company Name",
        type: "text",
        paragraph: (value: Record<string, any>) =>
          value.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}",
      } as any,
      YOUR_PRODUCT_OR_SERVICE_DESCRIPTION: {
        title: () => "Product/Service Description",
        type: "text",
        paragraph: (value: Record<string, any>) =>
          value.YOUR_PRODUCT_OR_SERVICE_DESCRIPTION ||
          "{1-YOUR_PRODUCT_OR_SERVICE_DESCRIPTION}",
      } as any,
      YOUR_COVER_PAGE_DATE: {
        title: () => "Cover Page Date",
        type: "text",
        paragraph: (value: Record<string, any>) =>
          value.YOUR_COVER_PAGE_DATE || "{2-YOUR_COVER_PAGE_DATE}",
      } as any,
      YOUR_FIRST_NAME_AND_LAST_NAME: {
        title: () => "Fullname",
        type: "text",
        paragraph: (value: Record<string, any>) =>
          value.YOUR_FIRST_NAME_AND_LAST_NAME ||
          "{1-YOUR_FIRST_NAME_AND_LAST_NAME}",
      } as any,
      YOUR_EMAIL_ADDRESS: {
        title: () => "Email Address",
        type: "text",
        paragraph: (value: Record<string, any>) =>
          value.YOUR_EMAIL_ADDRESS || "{1-YOUR_EMAIL_ADDRESS}",
      } as any,
      YOUR_PHONE_NUMBER: {
        title: () => "Phone Number",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          values.YOUR_PHONE_NUMBER || "{1-YOUR_PHONE_NUMBER}",
      } as any,
      YOUR_INTERNET_ADDRESS: {
        title: () => "Internet Address (URL)",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          values.YOUR_INTERNET_ADDRESS || "{1-YOUR_INTERNET_ADDRESS}",
      } as any,
      YOUR_POST_ADDRESS: {
        title: () => "Business Address",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          values.YOUR_POST_ADDRESS || "{1-YOUR_POST_ADDRESS}",
      } as any,
      YOUR_COVER_PAGE_LEGAL_DISCLOSURE: {
        stepNumber: 2,
        title: () => "Legal Disclosure",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          LEGAL_DISCLOSURES(
            values.YOUR_COVER_PAGE_LEGAL_DISCLOSURE,
            values.YOUR_COMPANY_NAME
          ) || "{2-YOUR_COVER_PAGE_LEGAL_DISCLOSURE}",
      } as any,
    },
  },
  {
    stepNumber: 3,
    hasOutput: true,
    stepTitle: "Executive Summary",
    sections: [
      {
        sectionId: "3.1",
        sectionTitle: "Problem, Solution, and Product",
        questions: [
          {
            reference: "3-15",
            type: "textarea",
            label: () => "What is your primary competitive advantage?",
            key: "YOUR_COMPETITIVE_ADVANTAGE",
            required: true,
            helperText:
              "Sample Answer: Our proprietary AI algorithm reduces rendering time for custom graphics by 40% compared to industry standards, offering clients faster delivery at a lower cost.",
          },
          {
            reference: "3-16",
            type: "textarea",
            label: () =>
              "Why is now the right time to launch or grow this company? (Market Timing)",
            key: "YOUR_WHY_NOW",
            required: true,
            helperText:
              "Sample Answer: The recent passage of new government regulations requires all competitors to update their hardware, providing us a two-year lead with our compliant, cloud-native solution.",
          },
          {
            reference: "3-23",
            type: "textarea",
            label: () =>
              "What core industry problem does your company address?",
            key: "YOUR_PROBLEM_THAT_YOUR_COMPANY_ADDRESSES",
            required: true,
            helperText:
              "Sample Answer: Small-to-medium enterprises (SMEs) lack affordable, integrated cybersecurity tools, leading to frequent data breaches and significant downtime.",
          },
          {
            reference: "3-24",
            type: "textarea",
            label: () => "What is your company's solution to this problem?",
            key: "YOUR_SOLUTION_TO_THE_PROBLEM",
            required: true,
            helperText:
              "Sample Answer: We offer a subscription-based, all-in-one security platform (Secure-Pro) that requires zero maintenance and is priced 60% below current enterprise offerings.",
          },
          {
            reference: "3-25",
            type: "text",
            label: () => "Can you provide an image or mockup of your product?",
            key: "YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT",
            required: false,
            helperText: "Sample Answer:",
          },
        ],
      },
      {
        sectionId: "3.2",
        sectionTitle: "Customer and Market (TAM)",
        questions: [
          {
            reference: "3-1",
            type: "textarea",
            label: () =>
              "What are the key demographic, psychographic, and behavioral characteristics of your ideal customers?",
            key: "YOUR_CHARACTERISTICS_OF_THE_IDEAL_CUSTOMERS",
            required: true,
            helperText:
              "Sample Answer: Customers are environmentally conscious individuals (age 25-45) living in urban areas, who value sustainability over price and frequently use public transportation.",
          },
          {
            reference: "3-2",
            type: "text",
            label: () =>
              "What is the geographical focus for your customer base during the first 2 years?",
            key: "YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_WITHIN_THE_FIRST_2_YEARS",
            required: true,
            helperText:
              "Sample Answer: Targeting the tri-state area (New York, New Jersey, Connecticut) and focusing on metropolitan hubs.",
          },
          {
            reference: "3-3",
            type: "text",
            label: () =>
              "What is the target geographical expansion for your customer base by Year 5?",
            key: "YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_IN_5_YEARS",
            required: true,
            helperText:
              "Sample Answer: Expanding to cover the top 10 largest US metropolitan areas and securing pilot customers in two major European cities (London and Paris).",
          },
          {
            reference: "3-4",
            type: "textarea",
            label: () =>
              "Are there any other important demographic details or targeting details?",
            key: "YOUR_OTHER_DEMOGRAPHIC_DETAILS",
            required: false,
            helperText:
              "Sample Answer: Specifically targeting businesses with between 50 and 200 employees in the healthcare sector.",
          },
          {
            reference: "3-5",
            type: "text",
            label: () =>
              "What is the current size (in currency or number of users) of your Total Addressable Market (TAM)?",
            key: "YOUR_TAM",
            required: true,
            helperText:
              "Sample Answer: The current TAM for renewable energy consulting services in North America is $5.5 Billion.",
          },
          {
            reference: "3-6",
            type: "text",
            label: () =>
              "What is the annual percentage growth rate of the TAM?",
            key: "YOUR_GROWTH_RATE_OF_THE_TAM",
            required: true,
            helperText:
              "Sample Answer: The TAM is projected to grow at a Compound Annual Growth Rate (CAGR) of 12% over the next five years.",
          },
          {
            reference: "3-7",
            type: "text",
            label: () => "What is the name of the source for your TAM data?",
            key: "YOUR_SOURCE_NAME_OF_TAM_DATA",
            required: true,
            helperText:
              "Sample Answer: Market Research Future (MRFR) 2024 Global Report",
          },
          {
            reference: "3-8",
            type: "text",
            label: () => "What is the URL for the source of your TAM data?",
            key: "YOUR_SOURCE_INTERNET_ADDRESS_OF_TAM_DATA",
            required: true,
            helperText:
              "Sample Answer: www.mrfr.com/global-renewable-energy-market-report",
          },
          {
            reference: "3-9",
            type: "text",
            label: () =>
              "What is your projected market share (as a percentage) after five years of operation?",
            key: "YOUR_PERCENT_OF_THE_TAM_DO_YOU_WANT_TO_CAPTURE_IN_5_YEARS",
            required: false,
            helperText:
              "Sample Answer: Targeting a 3% capture rate of the overall TAM by the end of year five.",
          },
        ],
      },
      {
        sectionId: "3.3",
        sectionTitle: "Competition, Sales, and Team",
        questions: [
          {
            reference: "3-10",
            type: "text",
            label: () => "What is the name of your largest competitor?",
            key: "YOUR_LARGEST_COMPETITOR",
            required: true,
            helperText: "Sample Answer: Global Energy Solutions (GES)",
          },
          {
            reference: "3-11",
            type: "text",
            label: () => "What is the name of your 2nd largest competitor?",
            key: "YOUR_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText: "Sample Answer: Enviro-Tech Advisors",
          },
          {
            reference: "3-12",
            type: "text",
            label: () => "What is the name of your 3rd largest competitor?",
            key: "YOUR_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText: "Sample Answer: Local Climate Consultants",
          },
          {
            reference: "3-13",
            type: "text",
            label: () => "What is the name of your 4th largest competitor?",
            key: "YOUR_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText: "Sample Answer: Smith & Sons Consulting",
          },
          {
            reference: "3-14",
            type: "text",
            label: () => "What is the name of your 5th largest competitor?",
            key: "YOUR_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText: "Sample Answer: Sustainable Futures Corp.",
          },
          {
            reference: "3-17",
            type: "textarea",
            label: () => "What are your planned sales channels and strategy?",
            key: "YOUR_HOW_ARE_YOU_PLANNING_ON_SELLING",
            required: true,
            helperText:
              "Sample Answer: We will use a direct-to-consumer (D2C) e-commerce model, supported by targeted digital marketing campaigns and influencer partnerships.",
          },
          {
            reference: "3-18",
            type: "textarea",
            label: () =>
              "Why are you (the founder/team) uniquely suited to lead this company to success? (Founder Rationale)",
            key: "YOUR_WHY_YOU",
            required: true,
            helperText:
              "Sample Answer: I spent 15 years as a senior executive at GES and possess an extensive network, deep industry knowledge, and direct experience in managing high-growth operations.",
          },
          {
            reference: "3-19",
            type: "textarea",
            label: () =>
              "If you have employees, list their most impressive and relevant skills that contribute to the business model's success.",
            key: "YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE",
            required: true,
            helperText:
              "Sample Answer: Lead Developer: 10 years experience in blockchain development; Marketing Director: Proven track record scaling B2C user acquisition by 50% year-over-year.",
          },
          {
            reference: "3-20",
            type: "textarea",
            label: () =>
              "If you have a Board or Advisors, what key skills do they possess that complement the management team?",
            key: "YOUR_SKILLS_THAT_YOUR_BOARD_HAS",
            required: false,
            helperText:
              "Sample Answer: Our key advisor is a former CFO of a publicly-traded tech firm, providing crucial financial governance and M&A experience that the core team lacks.",
          },
        ],
      },
      {
        sectionId: "3.4",
        sectionTitle: "Milestones and Strategy",
        questions: [
          {
            reference: "3-26",
            type: "select",
            label: () =>
              "What is the planned method for providing a return to investors (Exit Strategy)?",
            key: "YOUR_EXIT_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: Targeting acquisition by a larger environmental consulting firm (e.g., Tetra Tech or Jacobs) within 5-7 years, or pursuing a Series A funding round to scale for a later IPO.",
            options: [
              {
                label: "Initial Public Offering",
                value: "Initial Public Offering",
              },
              {
                label: "Sell the company",
                value: "Sell the company",
              },
              {
                label: "An initial public offering and/or selling the company",
                value: "An initial public offering and/or selling the company",
              },
              {
                label: "Not applicable",
                value: "Not applicable",
              },
            ],
          },
          {
            reference: "3-27",
            type: "textarea",
            label: () =>
              "What is the most significant achievement your company has reached to date (Biggest Milestone Achieved)?",
            key: "YOUR_BIGGEST_MILESTONE_SO_FAR",
            required: false,
            helperText:
              "Sample Answer: Securing a $500,000 seed investment and successfully completing the beta test with 50 paying customers, achieving a 95% customer satisfaction rate.",
          },
        ],
      },
      {
        sectionId: "3.5",
        sectionTitle: "Funding Request (Optional)",
        questions: [
          {
            reference: "3-21",
            type: "text",
            label: () =>
              "What is the total amount of capital you are seeking to raise?",
            key: "YOUR_AMOUNT_YOU_WOULD_LIKE_TO_RAISE",
            required: false,
            helperText: "Sample Answer: $2,500,000",
          },
          {
            reference: "3-22",
            type: "textarea",
            label: () =>
              "What is the breakdown of how the requested funds will be used (Use of Proceeds)?",
            key: "YOUR_USE_OF_PROCEEDS",
            required: false,
            helperText:
              "Sample Answer: 40% R&D for product expansion, 30% Hiring (sales & engineering), 20% Marketing/Customer Acquisition, 10% Working Capital.",
          },
        ],
      },
    ],
    outputs: {
      FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW: {
        stepNumber: 2,
        title: () => "Executive Summary",
        paragraph: (values: Record<string, any>) =>
          `${values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"} is a ${
            values.YOUR_COUNTRY_YOUR_BUSINESS_IS_HEADQUARTERED_IN ||
            "{1-YOUR_COUNTRY_YOUR_BUSINESS_IS_HEADQUARTERED_IN}"
          }-based ${
            values.YOUR_LEGAL_STRUCTURE || "{1-YOUR_LEGAL_STRUCTURE}"
          } which makes ${
            values.YOUR_PRODUCT_OR_SERVICE_DESCRIPTION ||
            "{1-YOUR_PRODUCT_OR_SERVICE_DESCRIPTION}"
          }. The size and growth of the total addressable market is ${
            values.YOUR_TAM || "{3-YOUR_TAM}"
          } and ${
            values.YOUR_GROWTH_RATE_OF_THE_TAM ||
            "{3-YOUR_GROWTH_RATE_OF_THE_TAM}"
          } respectively. ${
            values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"
          } plans on capturing ${
            values.YOUR_PERCENT_OF_THE_TAM_DO_YOU_WANT_TO_CAPTURE_IN_5_YEARS ||
            "{3-YOUR_PERCENT_OF_THE_TAM_DO_YOU_WANT_TO_CAPTURE_IN_5_YEARS}"
          } of the market in 5 years.`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_TARGET_CUSTOMER: {
        title: () => "Target Customer",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `The company's initial target market is ${
            values.YOUR_CHARACTERISTICS_OF_THE_IDEAL_CUSTOMERS ||
            "{3-YOUR_CHARACTERISTICS_OF_THE_IDEAL_CUSTOMERS}"
          } located in ${
            values.YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_WITHIN_THE_FIRST_2_YEARS ||
            "{3-YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_WITHIN_THE_FIRST_2_YEARS}"
          }. In 5 years, the target market will be customers located in ${
            values.YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_IN_5_YEARS ||
            "{3-YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_IN_5_YEARS}"
          }.`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_MANAGEMENT_TEAM: {
        title: () => "Management Team",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_FIRST_NAME_AND_LAST_NAME ||
            "{1-YOUR_FIRST_NAME_AND_LAST_NAME}"
          } founded ${values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"} in ${
            values.YOUR_YEAR_FOUNDED || "{1-YOUR_YEAR_FOUNDED}"
          }. ${
            values.YOUR_WHY_YOU || "{3-YOUR_WHY_YOU}"
          } Relevant skills and experience that employees of the firm have include ${
            values.YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE ||
            "{3-YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE}"
          }.`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_BOARD_ADVISORS: {
        title: () => "Board / Advisors",
        type: "text",
        paragraph: ({ YOUR_SKILLS_THAT_YOUR_BOARD_HAS }: Record<string, any>) =>
          `The company's board includes ${
            YOUR_SKILLS_THAT_YOUR_BOARD_HAS ||
            "{3-YOUR_SKILLS_THAT_YOUR_BOARD_HAS}"
          }`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_MARKET_PROBLEM_AND_SOLUTION: {
        title: () => "Market Problem & Solution",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `The problem with ${values.YOUR_INDUSTRY || "{1-YOUR_INDUSTRY}"} is ${
            values.YOUR_PROBLEM_THAT_YOUR_COMPANY_ADDRESSES ||
            "{3-YOUR_PROBLEM_THAT_YOUR_COMPANY_ADDRESSES}"
          }. ${
            values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"
          } solves this problem through ${
            values.YOUR_SOLUTION_TO_THE_PROBLEM ||
            "{3-YOUR_SOLUTION_TO_THE_PROBLEM}"
          }.`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_SIGNIFICANT_RECENT_COMPANY_MILESTONE: {
        title: () => "Significant Recent Company Milestone",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `A recent milestone achieved by ${
            values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"
          } is ${
            values.YOUR_BIGGEST_MILESTONE_SO_FAR ||
            "{3-YOUR_BIGGEST_MILESTONE_SO_FAR}"
          }. ${
            values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"
          } intends on raising ${
            values.YOUR_AMOUNT_YOU_WOULD_LIKE_TO_RAISE ||
            "{3-YOUR_AMOUNT_YOU_WOULD_LIKE_TO_RAISE}"
          }; the use of proceeds is ${
            values.YOUR_USE_OF_PROCEEDS || "{3-YOUR_USE_OF_PROCEEDS}"
          }. The intended exit strategy is through ${
            values.YOUR_EXIT_STRATEGY || "{3-YOUR_EXIT_STRATEGY}"
          }.`,
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_PRODUCT_IMAGE: {
        type: "image",
        title: () => "Product Image",
        url: (values: Record<string, any>) =>
          values.YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT ||
          "{3-YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT}",
      } as any,
      FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW_DATA_SOURCE_FOOTNOTE:
        {
          title: () => "Reference",
          type: "text",
          paragraph: ({
            YOUR_SKILLS_THAT_YOUR_BOARD_HAS,
          }: Record<string, any>) =>
            `The company's board includes ${
              YOUR_SKILLS_THAT_YOUR_BOARD_HAS ||
              "{3-YOUR_SKILLS_THAT_YOUR_BOARD_HAS}"
            }`,
        } as any,
    },
  },
  {
    stepNumber: 4,
    hasOutput: true,
    stepTitle: "Management",
    sections: [
      {
        sectionId: "4.1",
        sectionTitle: "Recruiting, Retention, and Competitive Skill Assessment",
        questions: [
          {
            reference: "4-1",
            type: "textarea",
            label: () => "What is your employee recruiting strategy?",
            key: "YOUR_EMPLOYEE_RECRUITING_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: We primarily recruit senior engineering talent through specialized headhunters and through referrals from our existing network. For entry-level positions, we focus on university career fairs at top-tier engineering schools.",
          },
          {
            reference: "4-2",
            type: "textarea",
            label: () =>
              "How do you incentivize, motivate, and retain employees?",
            key: "YOUR_EMPLOYEE_RETENTION_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: Retention is ensured through competitive salaries, a 10% stock options pool for all full-time employees, and flexible remote work policies. We motivate employees via project ownership and annual performance bonuses tied to company profitability.",
          },
          {
            reference: "4-3",
            type: "textarea",
            label: () =>
              "Based on competitors' employee profiles, what skills do you want your employees to learn or possess?",
            key: "YOUR_COMPETITION_EMPLOYEE_SKILLS",
            required: false,
            helperText:
              "Sample Answer: Competitor analysis shows a strong need for advanced Rust and Go programming skills in our engineering team, and deeper expertise in international compliance law for our legal team, which we will address through mandatory training.",
          },
        ],
      },
      {
        sectionId: "4.2",
        sectionTitle: "Founder Profile",
        questions: [
          {
            reference: "4-4",
            type: "textarea",
            label: () => "What are your biggest strengths?",
            key: "YOUR_MY_STRENGTHS",
            required: true,
            helperText:
              "Sample Answer: My biggest strengths are my technical vision (Master's in AI/ML), ability to fundraise (raised $5M in prior venture), and strong negotiation skills (secured key supplier contracts).",
          },
          {
            reference: "4-5",
            type: "textarea",
            label: () => "What are your biggest weaknesses?",
            key: "YOUR_MY_WEAKNESSES",
            required: true,
            helperText:
              "Sample Answer: My biggest weakness is a lack of experience in large-scale manufacturing logistics, which we plan to mitigate by hiring a specialized COO or outsourcing.",
          },
          {
            reference: "4-6",
            type: "text",
            label: () => "What is your job title?",
            key: "YOUR_MY_JOB_TITLE",
            required: true,
            helperText: "Sample Answer: Founder & CEO",
          },
          {
            reference: "4-73",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting your strengths, past relevant work experience, education, awards, accomplishments, and job responsibilities.",
            key: "YOUR_MY_BIO",
            required: true,
            helperText:
              "Sample Answer: Jane Doe is the Founder and CEO, responsible for driving company vision, fundraising, and product strategy. She holds an MS in AI from MIT and previously led product development at Google's X division, where she oversaw the launch of two successful projects. Jane was named Forbes 30 Under 30 in 2024.",
          },
          {
            reference: "4-74",
            type: "text",
            label: () =>
              "If available, paste your LinkedIn profile picture URL here.",
            key: "YOUR_LINKEDIN_PHOTO",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/jane_doe_profile.jpg",
          },
          //   {
          //     reference: "4-75",
          //     type: "image",
          //     label: () =>
          //       "If available, paste a few impressive logos (company or school names) from your LinkedIn profile.",
          //     key: "YOUR_PROFILE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: MIT, Google, Forbes 30 Under 30",
          //   },
        ],
      },
      {
        sectionId: "4.3",
        sectionTitle: "First Employee Profile",
        questions: [
          {
            reference: "4-7",
            type: "textarea",
            label: () => "What are the First Employee's biggest strengths?",
            key: "YOUR_FIRST_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Deep expertise in cloud infrastructure and security; proven track record of managing high-volume server deployments.",
          },
          {
            reference: "4-8",
            type: "textarea",
            label: () => "What are the First Employee's biggest weaknesses?",
            key: "YOUR_FIRST_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Limited experience in front-end development and UI/UX design.",
          },
          {
            reference: "4-9",
            type: "text",
            label: () => "What is the First Employee's job title?",
            key: "YOUR_FIRST_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Chief Technology Officer (CTO)",
          },
          {
            reference: "4-76",
            type: "textarea",
            label: () =>
              "Write a short bio for the First Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FIRST_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: John Smith is the CTO, responsible for all software architecture, infrastructure scaling, and technical roadmap execution. He holds a PhD in Computer Science and previously served as a Principal Engineer at AWS, specializing in large-scale serverless deployments.",
          },
          {
            reference: "4-77",
            type: "text",
            label: () =>
              "If available, paste the First Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FIRST_EMPLOYEES_LINKEDIN_PHOTO",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/john_smith_profile.jpg",
          },
          //   {
          //     reference: "4-78",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the First Employee's LinkedIn profile.",
          //     key: "YOUR_FIRST_EMPLOYEES_PROFILE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: AWS, Stanford University",
          //   },
        ],
      },
      {
        sectionId: "4.4",
        sectionTitle: "Second Employee Profile",
        questions: [
          {
            reference: "4-10",
            type: "textarea",
            label: () => "What are the Second Employee's biggest strengths?",
            key: "YOUR_SECOND_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Extensive network in the target industry; track record of exceeding multi-million dollar sales quotas for B2B SaaS.",
          },
          {
            reference: "4-11",
            type: "textarea",
            label: () => "What are the Second Employee's biggest weaknesses?",
            key: "YOUR_SECOND_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Less experienced in managing large, international sales teams.",
          },
          {
            reference: "4-12",
            type: "text",
            label: () => "What is the Second Employee's job title?",
            key: "YOUR_SECOND_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Head of Sales",
          },
          {
            reference: "4-79",
            type: "textarea",
            label: () =>
              "Write a short bio for the Second Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SECOND_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Sarah Lee is the Head of Sales, responsible for building the sales pipeline, defining the commission structure, and training the initial sales team. She spent 15 years at Salesforce as a top enterprise account executive and holds an MBA from Harvard Business School.",
          },
          {
            reference: "4-80",
            type: "text",
            label: () =>
              "If available, paste the Second Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SECOND_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/sarah_lee_profile.jpg",
          },
          //   {
          //     reference: "4-81",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Second Employee's LinkedIn profile.",
          //     key: "YOUR_SECOND_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: Salesforce, Harvard Business School",
          //   },
        ],
      },
      {
        sectionId: "4.5",
        sectionTitle: "Third Employee Profile",
        questions: [
          {
            reference: "4-13",
            type: "textarea",
            label: () => "What are the Third Employee's biggest strengths?",
            key: "YOUR_THIRD_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Expertise in scalable digital marketing (SEO/SEM) and viral content creation; achieved 5x ROAS in previous roles.",
          },
          {
            reference: "4-14",
            type: "textarea",
            label: () => "What are the Third Employee's biggest weaknesses?",
            key: "YOUR_THIRD_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Limited experience in traditional, offline media buying (TV/Radio).",
          },
          {
            reference: "4-15",
            type: "text",
            label: () => "What is the Third Employee's job title?",
            key: "YOUR_THIRD_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Head of Marketing",
          },
          {
            reference: "4-82",
            type: "textarea",
            label: () =>
              "Write a short bio for the Third Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_THIRD_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Alex Chen is the Head of Marketing, responsible for brand strategy, digital campaigns, and lead generation. Alex was previously the Director of Growth at a successful B2C startup and holds a degree in Communications.",
          },
          {
            reference: "4-83",
            type: "text",
            label: () =>
              "If available, paste the Third Employee's LinkedIn profile picture URL here.",
            key: "YOUR_THIRD_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/alex_chen_profile.jpg",
          },
          //   {
          //     reference: "4-84",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Third Employee's LinkedIn profile.",
          //     key: "YOUR_THIRD_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText:
          //       "Sample Answer: Shopify, University of California, Berkeley",
          //   },
        ],
      },
      {
        sectionId: "4.6",
        sectionTitle: "Fourth Employee Profile",
        questions: [
          {
            reference: "4-16",
            type: "textarea",
            label: () => "What are the Fourth Employee's biggest strengths?",
            key: "YOUR_FOURTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Exceptional analytical skills; highly proficient in all major financial reporting standards (GAAP/IFRS).",
          },
          {
            reference: "4-17",
            type: "textarea",
            label: () => "What are the Fourth Employee's biggest weaknesses?",
            key: "YOUR_FOURTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: New to startup culture, only worked in large corporate finance previously.",
          },
          {
            reference: "4-18",
            type: "text",
            label: () => "What is the Fourth Employee's job title?",
            key: "YOUR_FOURTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Financial Controller",
          },
          {
            reference: "4-85",
            type: "textarea",
            label: () =>
              "Write a short bio for the Fourth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FOURTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: David Brown is the Financial Controller, responsible for day-to-day accounting, budget tracking, and preparing internal financial reports. David spent 10 years at Deloitte as a senior auditor.",
          },
          {
            reference: "4-86",
            type: "text",
            label: () =>
              "If available, paste the Fourth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FOURTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/david_brown_profile.jpg",
          },
          //   {
          //     reference: "4-87",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Fourth Employee's LinkedIn profile.",
          //     key: "YOUR_FOURTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: Deloitte, Cornell University",
          //   },
        ],
      },
      {
        sectionId: "4.7",
        sectionTitle: "Fifth Employee Profile",
        questions: [
          {
            reference: "4-19",
            type: "textarea",
            label: () => "What are the Fifth Employee's biggest strengths?",
            key: "YOUR_FIFTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Deep expertise in user research and iterative product design; strong skills in Figma and Adobe XD.",
          },
          {
            reference: "4-20",
            type: "textarea",
            label: () => "What are the Fifth Employee's biggest weaknesses?",
            key: "YOUR_FIFTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Prefers working on B2C products, has limited experience designing for enterprise clients.",
          },
          {
            reference: "4-21",
            type: "text",
            label: () => "What is the Fifth Employee's job title?",
            key: "YOUR_FIFTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Lead UX/UI Designer",
          },
          {
            reference: "4-88",
            type: "textarea",
            label: () =>
              "Write a short bio for the Fifth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FIFTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Emily White is the Lead UX/UI Designer, responsible for all user interfaces, experience flows, and conducting usability testing. She previously designed the mobile app for a major FinTech company.",
          },
          {
            reference: "4-89",
            type: "text",
            label: () =>
              "If available, paste the Fifth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FIFTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/emily_white_profile.jpg",
          },
          //   {
          //     reference: "4-90",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Fifth Employee's LinkedIn profile.",
          //     key: "YOUR_FIFTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText:
          //       "Sample Answer: Chime, Rhode Island School of Design (RISD)",
          //   },
        ],
      },
      {
        sectionId: "4.8",
        sectionTitle: "Sixth Employee Profile",
        questions: [
          {
            reference: "4-22",
            type: "textarea",
            label: () => "What are the Sixth Employee's biggest strengths?",
            key: "YOUR_SIXTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Strong background in customer service management and creating scalable support documentation.",
          },
          {
            reference: "4-23",
            type: "textarea",
            label: () => "What are the Sixth Employee's biggest weaknesses?",
            key: "YOUR_SIXTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Needs training on specific ticketing software we use (Zendesk).",
          },
          {
            reference: "4-24",
            type: "text",
            label: () => "What is the Sixth Employee's job title?",
            key: "YOUR_SIXTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Head of Customer Success",
          },
          {
            reference: "4-91",
            type: "textarea",
            label: () =>
              "Write a short bio for the Sixth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SIXTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Mark Green is the Head of Customer Success, responsible for post-sales onboarding, support ticket management, and minimizing churn. He previously managed customer success for a mid-size B2B software company.",
          },
          {
            reference: "4-92",
            type: "text",
            label: () =>
              "If available, paste the Sixth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SIXTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/mark_green_profile.jpg",
          },
          //   {
          //     reference: "4-93",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Sixth Employee's LinkedIn profile.",
          //     key: "YOUR_SIXTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: HubSpot, University of Texas at Austin",
          //   },
        ],
      },
      {
        sectionId: "4.9",
        sectionTitle: "Seventh Employee Profile",
        questions: [
          {
            reference: "4-25",
            type: "textarea",
            label: () => "What are the Seventh Employee's biggest strengths?",
            key: "YOUR_SEVENTH_EMPLOYEES_STRENGTHS",
            required: true,
            helperText:
              "Sample Answer: Specialized in compliance and regulatory documentation for high-tech products; meticulous attention to detail.",
          },
          {
            reference: "4-26",
            type: "textarea",
            label: () => "What are the Seventh Employee's biggest weaknesses?",
            key: "YOUR_SEVENTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Limited experience in international trade and tariff law.",
          },
          {
            reference: "4-27",
            type: "text",
            label: () => "What is the Seventh Employee's job title?",
            key: "YOUR_SEVENTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Compliance Manager",
          },
          {
            reference: "4-94",
            type: "textarea",
            label: () =>
              "Write a short bio for the Seventh Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SEVENTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Nancy Hall is the Compliance Manager, responsible for ensuring the product meets all federal and state safety and data protection standards. She previously worked at the Consumer Product Safety Commission (CPSC).",
          },
          {
            reference: "4-95",
            type: "text",
            label: () =>
              "If available, paste the Seventh Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SEVENTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/nancy_hall_profile.jpg",
          },
          //   {
          //     reference: "4-96",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Seventh Employee's LinkedIn profile.",
          //     key: "YOUR_SEVENTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: CPSC, Georgetown University Law Center",
          //   },
        ],
      },
      {
        sectionId: "4.10",
        sectionTitle: "Eighth Employee Profile",
        questions: [
          {
            reference: "4-28",
            type: "textarea",
            label: () => "What are the Eighth Employee's biggest strengths?",
            key: "YOUR_EIGHTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Highly skilled in front-end development, specifically React and native mobile application frameworks (Swift/Kotlin).",
          },
          {
            reference: "4-29",
            type: "textarea",
            label: () => "What are the Eighth Employee's biggest weaknesses?",
            key: "YOUR_EIGHTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Requires supervision when writing complex SQL queries for database optimization.",
          },
          {
            reference: "4-30",
            type: "text",
            label: () => "What is the Eighth Employee's job title?",
            key: "YOUR_EIGHTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Senior Front-End Engineer",
          },
          {
            reference: "4-97",
            type: "textarea",
            label: () =>
              "Write a short bio for the Eighth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_EIGHTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Oliver King is the Senior Front-End Engineer, responsible for the development and maintenance of the customer-facing web and mobile applications. He has 8 years of experience building high-traffic consumer interfaces.",
          },
          {
            reference: "4-98",
            type: "text",
            label: () =>
              "If available, paste the Eighth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_EIGHTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/oliver_king_profile.jpg",
          },
          //   {
          //     reference: "4-99",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Eighth Employee's LinkedIn profile.",
          //     key: "YOUR_EIGHTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: Snapchat, Codecademy",
          //   },
        ],
      },
      {
        sectionId: "4.11",
        sectionTitle: "Ninth Employee Profile",
        questions: [
          {
            reference: "4-31",
            type: "textarea",
            label: () => "What are the Ninth Employee's biggest strengths?",
            key: "YOUR_NINTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Expert knowledge in hardware prototyping and materials science; strong ability to manage external design contractors.",
          },
          {
            reference: "4-32",
            type: "textarea",
            label: () => "What are the Ninth Employee's biggest weaknesses?",
            key: "YOUR_NINTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Does not have extensive experience managing high-volume (1M+ units) assembly lines.",
          },
          {
            reference: "4-33",
            type: "text",
            label: () => "What is the Ninth Employee's job title?",
            key: "YOUR_NINTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Lead Mechanical Engineer",
          },
          {
            reference: "4-100",
            type: "textarea",
            label: () =>
              "Write a short bio for the Ninth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_NINTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Patricia Quinn is the Lead Mechanical Engineer, responsible for all physical product design, materials selection, and prototyping. She holds several industrial design patents and previously worked at IDEO.",
          },
          {
            reference: "4-101",
            type: "text",
            label: () =>
              "If available, paste the Ninth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_NINTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/patricia_quinn_profile.jpg",
          },
          //   {
          //     reference: "4-102",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Ninth Employee's LinkedIn profile.",
          //     key: "YOUR_NINTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText:
          //       "Sample Answer: IDEO, Massachusetts Institute of Technology (MIT)",
          //   },
        ],
      },
      {
        sectionId: "4.12",
        sectionTitle: "Tenth Employee Profile",
        questions: [
          {
            reference: "4-34",
            type: "textarea",
            label: () => "What are the Tenth Employee's biggest strengths?",
            key: "YOUR_TENTH_EMPLOYEES_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Highly proficient in Python/TensorFlow for model training and deployment; specialized in computer vision algorithms.",
          },
          {
            reference: "4-35",
            type: "textarea",
            label: () => "What are the Tenth Employee's biggest weaknesses?",
            key: "YOUR_TENTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Sample Answer: Lacks business development or client-facing communication skills.",
          },
          {
            reference: "4-36",
            type: "text",
            label: () => "What is the Tenth Employee's job title?",
            key: "YOUR_TENTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: AI Research Scientist",
          },
          {
            reference: "4-103",
            type: "textarea",
            label: () =>
              "Write a short bio for the Tenth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_TENTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Sample Answer: Robert Scott is the AI Research Scientist, responsible for developing and optimizing the core machine learning models that power the product's advanced features. He holds a PhD in Robotics and was a research fellow at DeepMind.",
          },
          {
            reference: "4-104",
            type: "text",
            label: () =>
              "If available, paste the Tenth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_TENTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/robert_scott_profile.jpg",
          },
          //   {
          //     reference: "4-105",
          //     type: "image",
          //     label: () =>
          //       "If available, paste at least one impressive logo from the Tenth Employee's LinkedIn profile.",
          //     key: "YOUR_TENTH_EMPLOYEES_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: DeepMind, Carnegie Mellon University",
          //   },
        ],
      },
      {
        sectionId: "4.13",
        sectionTitle: "Skill Gaps and Outsourcing",
        questions: [
          {
            reference: "4-37",
            type: "textarea",
            label: () =>
              "Based on the team's strengths and weaknesses, are there any significant skill gaps? If so, please list the gaps you would like to address.",
            key: "YOUR_SIGNIFICANT_SKILL_GAPS",
            required: true,
            helperText:
              "Sample Answer: The primary gaps are manufacturing and large-scale supply chain logistics (CEO's weakness) and corporate legal expertise (not covered by any current employee). We also need dedicated CFO-level financial modeling.",
          },
          {
            reference: "4-38",
            type: "textarea",
            label: () =>
              "Write down what skills you plan to outsource to external service providers.",
            key: "YOUR_SKILLS_TO_OUTSOURCE",
            required: false,
            helperText:
              "Sample Answer: We will outsource Legal Counsel (retaining a firm for IP/corporate structure), Payroll and HR Administration, and Graphic Design/Creative Marketing (contracting an agency).",
          },
        ],
      },
      {
        sectionId: "4.14",
        sectionTitle: "Outsourced Partner Profiles",
        questions: [
          {
            reference: "4-108",
            type: "text",
            label: () => "Type in the name of outsourced partner #1.",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Sample Answer: Smith & Associates",
          },
          {
            reference: "4-109",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #1 works for.",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Smith & Associates Legal LLP",
          },
          {
            reference: "4-110",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #1 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Corporate Legal Counsel",
          },
          {
            reference: "4-111",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #1's biggest strengths.",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Sample Answer: Smith & Associates is a boutique legal firm specializing in early-stage tech corporate structure and IP law, bringing 20 years of experience protecting high-growth startups.",
          },
          {
            reference: "4-112",
            type: "text",
            label: () => "Type in the name of outsourced partner #2.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Sample Answer: CFO Solutions Group",
          },
          {
            reference: "4-113",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #2 works for.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: CFO Solutions Group LLC",
          },
          {
            reference: "4-114",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #2 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Fractional CFO and Financial Modeler",
          },
          {
            reference: "4-115",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #2's biggest strengths.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Sample Answer: CFO Solutions Group provides experienced financial officers who specialize in generating complex 5-year financial models and optimizing cash flow for companies preparing for Series A funding.",
          },
          {
            reference: "4-116",
            type: "text",
            label: () => "Type in the name of outsourced partner #3.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Sample Answer: The HR Firm",
          },
          {
            reference: "4-117",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #3 works for.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: The HR Firm Co.",
          },
          {
            reference: "4-118",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #3 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: HR and Payroll Administrator",
          },
          {
            reference: "4-119",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #3's biggest strengths.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Sample Answer: The HR Firm manages all compliance, benefits, and payroll for small to medium-sized tech startups, ensuring legal adherence and efficient personnel management.",
          },
          {
            reference: "4-120",
            type: "text",
            label: () => "Type in the name of outsourced partner #4.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Sample Answer: Creative Solutions Agency",
          },
          {
            reference: "4-121",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #4 works for.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Creative Solutions Agency LLC",
          },
          {
            reference: "4-122",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #4 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Marketing and Design Contractor",
          },
          {
            reference: "4-123",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #4's biggest strengths.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Sample Answer: Creative Solutions Agency provides on-demand graphic design, content creation, and campaign management, allowing our in-house team to focus on core product marketing.",
          },
          {
            reference: "4-124",
            type: "text",
            label: () => "Type in the name of outsourced partner #5.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Sample Answer: Global Logistics Pros",
          },
          {
            reference: "4-125",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #5 works for.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Global Logistics Pros Inc.",
          },
          {
            reference: "4-126",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #5 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Supply Chain Consultant",
          },
          {
            reference: "4-127",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #5's biggest strengths.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Sample Answer: Global Logistics Pros provides expert guidance on optimizing international shipping routes, managing customs, and reducing landed costs for hardware products, filling a critical gap in the CEO's experience.",
          },
        ],
      },
      {
        sectionId: "4.15",
        sectionTitle: "First Board Advisor",
        questions: [
          {
            reference: "4-40",
            type: "text",
            label: () => "What sector do you want board advisor #1 to be in?",
            key: "YOUR_BOARD_ADVISOR_1_SECTOR",
            required: false,
            helperText: "Sample Answer: Supply Chain/Manufacturing",
          },
          {
            reference: "4-41",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #1 be from?",
            key: "YOUR_BOARD_ADVISOR_1_IDEAL_COMPANIES",
            required: false,
            helperText: "Sample Answer: Tesla, Apple, Foxconn",
          },
          {
            reference: "4-42",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #1.",
            key: "YOUR_BOARD_ADVISOR_1_CANDIDATES",
            required: false,
            helperText:
              "Sample Answer: Alan Tusk (ex-Apple VP), Sandra Lee (Foxconn Operations Lead)",
          },
          {
            reference: "4-43",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #1 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_1_MEETINGS_SET_UP",
            required: false,
            helperText:
              "Sample Answer: Meeting set up with Alan Tusk on Tuesday.",
          },
          {
            reference: "4-44",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #1.",
            key: "YOUR_FIRST_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Sample Answer: Alan Tusk",
          },
          {
            reference: "4-45",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #1 works for.",
            key: "YOUR_FIRST_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Global Manufacturing Inc.",
          },
          {
            reference: "4-46",
            type: "text",
            label: () =>
              "Type in the title of board advisor #1 (i.e., Vice President, Engineering).",
            key: "YOUR_FIRST_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Chief Logistics Officer (CLO)",
          },
          //   {
          //     reference: "4-47",
          //     type: "image",
          //     label: () =>
          //       "If available, enter in at least one impressive logo of companies or schools that board advisor #1 has on their LinkedIn profile.",
          //     key: "YOUR_BOARD_ADVISOR_1_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: Apple, Tesla, MIT",
          //   },
          {
            reference: "4-48",
            type: "textarea",
            label: () => "What are board advisor #1's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_1_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Over 25 years in optimizing global supply chains and reducing manufacturing costs by up to 40%.",
          },
          {
            reference: "4-49",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #1's biggest strengths.",
            key: "YOUR_FIRST_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Sample Answer: Alan Tusk, CLO of Global Manufacturing Inc., is a globally recognized expert in hardware scaling. He brings an unmatched track record in optimizing complex international supply chains and has successfully managed the production logistics for Fortune 500 companies, directly addressing our team's manufacturing weakness.",
          },
          {
            reference: "4-50",
            type: "text",
            label: () =>
              "If available, paste board advisors #1's LinkedIn profile picture URL here.",
            key: "YOUR_FIRST_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/alan_tusk_profile.jpg",
          },
        ],
      },
      {
        sectionId: "4.16",
        sectionTitle: "Second Board Advisor",
        questions: [
          {
            reference: "4-51",
            type: "text",
            label: () => "What sector do you want board advisor #2 to be in?",
            key: "YOUR_BOARD_ADVISOR_2_SECTOR",
            required: false,
            helperText: "Sample Answer: Legal/IP Strategy",
          },
          {
            reference: "4-52",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #2 be from?",
            key: "YOUR_BOARD_ADVISOR_2_IDEAL_COMPANIES",
            required: false,
            helperText:
              "Sample Answer: Wilson Sonsini Goodrich & Rosati, Cooley LLP",
          },
          {
            reference: "4-53",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #2.",
            key: "YOUR_BOARD_ADVISOR_2_CANDIDATES",
            required: false,
            helperText:
              "Sample Answer: Lisa Kim (Venture Law Partner), Robert Davis (Patent Attorney)",
          },
          {
            reference: "4-54",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #2 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_2_MEETINGS_SET_UP",
            required: false,
            helperText:
              "Sample Answer: Meeting set up with Lisa Kim next Friday.",
          },
          {
            reference: "4-55",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #2.",
            key: "YOUR_SECOND_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Sample Answer: Lisa Kim",
          },
          {
            reference: "4-56",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #2 works for.",
            key: "YOUR_SECOND_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Venture Law Partners",
          },
          {
            reference: "4-57",
            type: "text",
            label: () =>
              "Type in the title of board advisor #2 (i.e., Vice President, Engineering).",
            key: "YOUR_SECOND_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Partner and Head of Patent Litigation",
          },
          //   {
          //     reference: "4-58",
          //     type: "image",
          //     label: () =>
          //       "If available, enter in at least one impressive logo of companies or schools that board advisor #2 has on their LinkedIn profile.",
          //     key: "YOUR_BOARD_ADVISOR_2_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText: "Sample Answer: Stanford Law, Tesla Legal Dept.",
          //   },
          {
            reference: "4-59",
            type: "textarea",
            label: () => "What are board advisor #2's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_2_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Deep expertise in technology patent defense and corporate compliance for venture-backed companies.",
          },
          {
            reference: "4-60",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #2's biggest strengths.",
            key: "YOUR_SECOND_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Sample Answer: Lisa Kim, Partner at Venture Law Partners, is one of Silicon Valley's most respected legal minds in the tech sector. Her expertise is critical for guiding our intellectual property strategy and protecting our proprietary technology from competitive threats, a key gap identified in our initial team.",
          },
          {
            reference: "4-61",
            type: "text",
            label: () =>
              "If available, paste board advisors #2's LinkedIn profile picture URL here.",
            key: "YOUR_SECOND_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/lisa_kim_profile.jpg",
          },
        ],
      },
      {
        sectionId: "4.17",
        sectionTitle: "Third Board Advisor",
        questions: [
          {
            reference: "4-62",
            type: "text",
            label: () => "What sector do you want board advisor #3 to be in?",
            key: "YOUR_BOARD_ADVISOR_3_SECTOR",
            required: false,
            helperText: "Sample Answer: Financial Modeling/Venture Capital",
          },
          {
            reference: "4-63",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #3 be from?",
            key: "YOUR_BOARD_ADVISOR_3_IDEAL_COMPANIES",
            required: false,
            helperText:
              "Sample Answer: Sequoia Capital, Andreessen Horowitz (a16z), Kleiner Perkins",
          },
          {
            reference: "4-64",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #3.",
            key: "YOUR_BOARD_ADVISOR_3_CANDIDATES",
            required: false,
            helperText:
              "Sample Answer: Ben Thompson (Managing Partner), Jessica Chan (VP of Finance, ScaleUp Ventures)",
          },
          {
            reference: "4-65",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #3 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_3_MEETINGS_SET_UP",
            required: false,
            helperText:
              "Sample Answer: Initial call scheduled with Ben Thompson.",
          },
          {
            reference: "4-66",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #3.",
            key: "YOUR_THIRD_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Sample Answer: Ben Thompson",
          },
          {
            reference: "4-67",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #3 works for.",
            key: "YOUR_THIRD_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Sample Answer: Capital Growth Fund",
          },
          {
            reference: "4-68",
            type: "text",
            label: () =>
              "Type in the job title of board advisor #3 (i.e., Vice President, Engineering).",
            key: "YOUR_THIRD_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Sample Answer: Managing Partner",
          },
          //   {
          //     reference: "4-69",
          //     type: "image",
          //     label: () =>
          //       "If available, enter in at least one impressive logo of companies or schools that board advisor #3 has on their LinkedIn profile.",
          //     key: "YOUR_BOARD_ADVISOR_3_IMPRESSIVE_LOGOS",
          //     required: false,
          //     helperText:
          //       "Sample Answer: Sequoia Capital, Harvard Business School, PayPal",
          //   },
          {
            reference: "4-70",
            type: "textarea",
            label: () => "What are board advisor #3's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_3_STRENGTHS",
            required: false,
            helperText:
              "Sample Answer: Exceptional financial modeling, access to follow-on funding, and experience scaling companies from $1M to $100M ARR.",
          },
          {
            reference: "4-71",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #3's biggest strengths.",
            key: "YOUR_THIRD_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Sample Answer: Ben Thompson, Managing Partner at Capital Growth Fund, brings over a decade of venture capital experience and has served on the boards of multiple successful unicorn companies. His strategic financial oversight and deep understanding of investor expectations will be invaluable for our future funding rounds.",
          },
          {
            reference: "4-72",
            type: "text",
            label: () =>
              "If available, paste board advisors #3's LinkedIn profile picture URL here.",
            key: "YOUR_THIRD_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample Answer: http://googleusercontent.com/image_collection/image_retrieval/ben_thompson_profile.jpg",
          },
        ],
      },
      {
        sectionId: "4.18",
        sectionTitle: "Bio and Image Placeholders (Internal Fields)",
        questions: [
          {
            reference: "4-106",
            type: "textarea",
            label: () =>
              "If you need to mention that you want to hire another person to compensate for documented weaknesses, write a brief sentence here.",
            key: "YOUR_NEED_TO_HIRE_FOR_THESE_ROLES",
            required: false,
            helperText:
              "Sample Answer: We will actively hire a dedicated Director of Manufacturing by Q2 to fill the skill gap identified in the CEO and Lead Mechanical Engineer's profiles.",
          },
          {
            reference: "4-107",
            type: "textarea",
            label: () =>
              "If you have not accounted for who is in charge of key job functions (Sales, Marketing, Accounting, Legal, etc.), write a note to address this (e.g., outsourced or skills to be learned).",
            key: "YOUR_UNACCOUNTED_JOB_FUNCTIONS_NOTE",
            required: false,
            helperText:
              "Sample Answer: Accounting and Legal functions are being handled by Outsourced Partners (Smith & Associates and CFO Solutions Group), as documented in Section 4.14.",
          },
        ],
      },
    ],
    outputs: {
      FINAL_BP_MANAGEMENT_TEAM_OVERVIEW_YOUR_TITLE_AND_YOUR_NAME: {
        type: "text",
        title: (values: Record<string, any>) => values.YOUR_MY_BIO,
      },
    } as any,
  },
  {
    stepNumber: 5,
    hasOutput: true,
    stepTitle: "Product/Service",
    sections: [
      {
        sectionId: "5.1",
        sectionTitle: "Core Offering and Value Proposition",
        questions: [
          {
            reference: "5-1",
            type: "textarea",
            label: () =>
              "Please write a detailed 1-3 paragraph description of your product or service, including the value proposition to your customers.",
            key: "YOUR_DETAILED_PRODUCT_OR_SERVICE_DESCRIPTION",
            required: true,
            helperText:
              "Sample Answer: Medi-Track is a secure, HIPAA-compliant telehealth platform connecting elderly patients in rural areas to specialist physicians. Our value proposition is centered on convenience and cost-savings: patients avoid long travel times and high hospital fees by receiving high-quality consultations from home. The platform includes a proprietary AI pre-diagnosis tool that significantly reduces physician prep time, allowing specialists to see more patients efficiently.",
          },
          {
            reference: "5-2",
            type: "textarea",
            label: () =>
              "Is your business model scalable? If so, comment on how it is scalable. Is your product or service a platform, and if so, what else can run on your platform in the long run?",
            key: "YOUR_SCALABLE",
            required: false,
            helperText:
              "Sample Answer: Yes, our model is highly scalable. The platform is entirely cloud-based, meaning adding new users or new states requires minimal capital expenditure (CapEx). In the long run, our core database infrastructure (a platform) can support integrating remote patient monitoring (RPM) services and personalized prescription delivery systems.",
          },
        ],
      },
      {
        sectionId: "5.2",
        sectionTitle: "Production and Quality Control",
        questions: [
          {
            reference: "5-3",
            type: "textarea",
            label: () =>
              "How do you ensure that your product or service is produced and delivered with high quality to the extent that the customer experience is superb (especially when compared to the competition)?",
            key: "YOUR_QUALITY_CONTROL",
            required: false,
            helperText:
              "Sample Answer: We implement a three-stage quality control (QC) check: 1) raw material inspection, 2) mid-production line check using computer vision, and 3) final manual inspection before packaging. Customer feedback loops are integrated directly into our development cycle to address issues within 48 hours.",
          },
          {
            reference: "5-4",
            type: "textarea",
            label: () =>
              "If applicable, comment on the packaging of the product/service.",
            key: "YOUR_PACKAGING",
            required: false,
            helperText:
              "Sample Answer: Our product packaging is entirely plastic-free and biodegradable, using recycled cardboard printed with soy-based inks. This reinforces our brand's sustainability commitment and provides a premium unboxing experience, differentiating us from competitors who use standard plastic clamshells.",
          },
          {
            reference: "5-5",
            type: "textarea",
            label: () =>
              "If applicable, comment on the production of your product and how you plan on dealing with potential inventory issues.",
            key: "YOUR_PRODUCTION",
            required: false,
            helperText:
              "Sample Answer: Production is outsourced to two independent facilities in Vietnam and Malaysia to mitigate single-source failure risk. We use a Just-In-Time (JIT) inventory system combined with automated reorder points at 20% stock capacity to prevent inventory shortfalls during peak seasons.",
          },
          {
            reference: "5-12",
            type: "textarea",
            label: () =>
              "If you are producing your product, what are your thoughts on dealing with input price spikes (i.e., if commodity prices rise)?",
            key: "YOUR_INPUT_PRICES",
            required: false,
            helperText:
              "Sample Answer: We have long-term contracts (18 months) with our primary lithium-ion battery supplier to lock in input prices. For other materials, we maintain a three-month buffer stock and have identified secondary regional suppliers to quickly switch if sustained price spikes occur.",
          },
        ],
      },
      {
        sectionId: "5.3",
        sectionTitle: "Pricing and Revenue Strategy",
        questions: [
          {
            reference: "5-6",
            type: "textarea",
            label: () =>
              "Discuss the current pricing strategy of your product (e.g., subscription, tiered, value-based, or using a 'charm pricing strategy').",
            key: "YOUR_CURRENT_PRICE_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: We use a **value-based, tiered subscription model** with charm pricing. The 'Pro' tier is priced at **$199.99** per month, offering a perceived deal compared to the round number, while reflecting the high ROI our clients receive in saved labor costs.",
          },
          {
            reference: "5-7",
            type: "textarea",
            label: () =>
              "Discuss current or future cross-selling and upselling pricing details, if applicable.",
            key: "YOUR_FUTURE_PRICE_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: Our primary upsell is the **Enterprise Data Analytics Module** (+$50/month), which offers deeper insights. For cross-selling, we partner with a security vendor to offer discounted VPN access integrated into our platform.",
          },
          {
            reference: "5-8",
            type: "textarea",
            label: () =>
              "If applicable, comment on bundle product sales as a strategy, try-to-buy as a strategy, and other pricing strategies.",
            key: "YOUR_BUNDLE_PRICE_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: We offer a **Starter Bundle** (Product A + Product B) at a 15% discount versus purchasing items separately. We also utilize a **Try-to-Buy** strategy where customers can rent the hardware for 3 months, with 50% of the rental fee applied toward the final purchase price.",
          },
          {
            reference: "5-9",
            type: "textarea",
            label: () => "If applicable, comment on volume discounts.",
            key: "YOUR_VOLUME_DISCOUNTS",
            required: false,
            helperText:
              "Sample Answer: We offer a standard volume discount for B2B clients: a 10% discount for orders over 100 units, and a 20% discount for orders over 500 units. This is codified in our tiered reseller agreement.",
          },
          {
            reference: "5-10",
            type: "radio",
            label: () =>
              "Do you have a financing option when selling your products?",
            key: "YOUR_FINANCING",
            required: false,
            helperText:
              "Sample Answer: Yes, we offer 6-month, 0% APR financing through a third-party partner, 'Affirm,' for any purchase over $500 to reduce the initial barrier to adoption.",
          },
          {
            reference: "5-11",
            type: "radio",
            label: () =>
              "Do you offer a premium or freemium version of your product?",
            key: "YOUR_FREEMIUM_OR_PREMIUM_STRATEGY",
            required: false,
            helperText:
              "Sample Answer: We utilize a **Freemium** strategy. The basic software version is free but limited to 3 users and lacks export functionality, encouraging 75% of active users to upgrade to the full **Premium** paid version within 6 months.",
            options: [
              { value: "freemium", label: "Freemium" },
              {
                value: "premium",
                label: "Premium (Paid Tiers)",
              },
              { value: "none", label: "Neither" },
            ],
          },
        ],
      },
      {
        sectionId: "5.4",
        sectionTitle: "Distribution and Fulfillment",
        questions: [
          {
            reference: "5-13",
            type: "textarea",
            label: () =>
              "Discuss how and who is selling your product to your customers (Distribution Strategy).",
            key: "YOUR_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: For B2C, we sell exclusively through our proprietary e-commerce channel. For B2B, sales are handled by a dedicated, in-house sales team focused on Fortune 500 clients, supplemented by a network of certified Value-Added Resellers (VARs) in secondary markets.",
          },
          {
            reference: "5-14",
            type: "textarea",
            label: () => "What is your return policy?",
            key: "YOUR_RETURN_POLICY",
            required: false,
            helperText:
              "Sample Answer: We offer a 30-day, no-questions-asked, full refund policy for all physical products. For SaaS subscriptions, cancellation can occur anytime, but only annual payments are eligible for a prorated refund within the first 60 days.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 6,
    hasOutput: true,
    stepTitle: "Customer & Market",
    sections: [
      {
        sectionId: "6.1",
        sectionTitle: "Customer Profile and Strategy",
        questions: [
          {
            reference: "6-2",
            type: "radio",
            label: () =>
              "Have you conducted a sample survey from your customers or potential customers?",
            key: "YOUR_CUSTOMER_SURVEY_RESEARCH",
            required: false,
            helperText:
              "Sample Answer: Yes, we conducted a SurveyMonkey survey of 300 potential users, which validated our pricing model and feature set.",
          },
          {
            reference: "6-3",
            type: "textarea",
            label: () =>
              "Expand upon previous answers by writing a 3-sentence paragraph describing your ideal customer, including average age, location, language, income, and other demographic information.",
            key: "YOUR_WHO_IS_THE_CUSTOMER",
            required: true,
            helperText:
              "Sample Answer: Our ideal customer is a **Senior IT Manager** (age 40-55) in the US Northeast, typically earning over $120,000 annually. They manage decentralized networks and prioritize security compliance above all else. This demographic is actively searching for unified cloud-based solutions to replace outdated on-premise hardware.",
          },
          {
            reference: "6-4",
            type: "textarea",
            label: () =>
              "Does 1 or more customer comprise more than 10% of your annual revenue? If so, explain this risk and how you will address it to decrease customer concentration in the future.",
            key: "YOUR_CUSTOMER_CONCENTRATION",
            required: true,
            helperText:
              "Sample Answer: Yes, our initial corporate client, 'Acme Corp,' currently accounts for 15% of projected Year 1 revenue, presenting a concentration risk. We will mitigate this by aggressively pursuing 10-15 smaller accounts in Q3 and Q4 to reduce Acme's share to below 8% by Year 2.",
          },
          {
            reference: "6-5",
            type: "textarea",
            label: () =>
              "How do you plan on documenting and maintaining information about your customers (e.g., using a CRM or email marketing)?",
            key: "YOUR_CUSTOMER_PROFILE_DOCUMENTATION",
            required: false,
            helperText:
              "Sample Answer: We utilize a **HubSpot CRM** integrated with our sales pipeline to track every customer touchpoint. Demographic data is aggregated from sign-up forms and used to personalize email marketing campaigns (Mailchimp) for upselling opportunities.",
          },
          {
            reference: "6-6",
            type: "textarea",
            label: () =>
              "Document your strategy for attaining customers, avoiding specific sales or marketing strategies (which are covered in Step 9).",
            key: "YOUR_CUSTOMER_ATTAINMENT_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: Our initial customer attainment strategy relies on **Pilot Programs** with key industry partners and providing high-value **Gated Content** (e.g., white papers and free tools) to capture leads. We will focus on building relationships with **industry associations** to gain credibility.",
          },
          {
            reference: "6-7",
            type: "radio",
            label: () =>
              "Are you following your customers and potential customers on social media accounts, like Twitter?",
            key: "YOUR_FOLLOWING_CUSTOMERS_ON_SOCIAL_MEDIA",
            required: false,
            helperText:
              "Sample Answer: Yes, we track over 200 key decision-makers on LinkedIn and Twitter to monitor sentiment and identify buying signals.",
          },
          {
            reference: "6-8",
            type: "radio",
            label: () =>
              "Have you signed up for Google Alerts to receive immediate emails whenever your customers are in the news?",
            key: "YOUR_GOOGLE_ALERTS_FOR_CUSTOMERS",
            required: false,
            helperText:
              "Sample Answer: Yes, we have Google Alerts set up for our top 10 target corporate clients and all major competitors to stay informed about their activities and identify opportunities.",
          },
        ],
      },
      {
        sectionId: "6.2",
        sectionTitle: "Customer Service and Retention",
        questions: [
          {
            reference: "6-9",
            type: "textarea",
            label: () =>
              "How will you ensure a high level of customer service?",
            key: "YOUR_CUSTOMER_SERVICE",
            required: true,
            helperText:
              "Sample Answer: We employ a 24/7 in-house support team accessible via live chat, phone, and email. All agents undergo mandatory weekly training focusing on product knowledge and emotional intelligence to ensure first-call resolution and exceptional support.",
          },
          {
            reference: "6-10",
            type: "text",
            label: () =>
              "How long does it take (or do you think it will take) for your company to respond to customer inquiries (i.e., 1 or 2 days)?",
            key: "YOUR_CUSTOMER_RESPONSE_TIME",
            required: false,
            helperText:
              "Sample Answer: Our Service Level Agreement (SLA) guarantees a maximum response time of **4 hours** for all non-critical issues and **15 minutes** for critical system outages.",
          },
          {
            reference: "6-11",
            type: "radio",
            label: () =>
              "Do you have or plan to have a loyalty program like Starbucks cards?",
            key: "YOUR_CUSTOMER_LOYALTY_PROGRAM",
            required: false,
            helperText:
              "Sample Answer: Yes, we are launching the **Gold Member Program** which offers recurring customers a 10% discount after their 10th purchase and access to exclusive early product betas.",
          },
          {
            reference: "6-12",
            type: "textarea",
            label: () =>
              "Do you offer product warranties? If so, comment on your warranty policy.",
            key: "YOUR_WARRANTY_POLICY",
            required: false,
            helperText:
              "Sample Answer: We offer a standard **5-year limited hardware warranty** that covers defects in materials and workmanship. This is significantly longer than the 3-year standard offered by our two largest competitors, establishing trust with high-value clients.",
          },
        ],
      },
      {
        sectionId: "6.3",
        sectionTitle: "Industry Landscape and Trends",
        questions: [
          {
            reference: "6-13",
            type: "textarea",
            label: () =>
              "Have you done research on the search trends for your industry (e.g., using Google Trends)? If so, mention any interesting trends.",
            key: "YOUR_INDUSTRY_SEARCH_TRENDS",
            required: false,
            helperText:
              "Sample Answer: Google Trends data shows a **150% spike** in searches for 'decentralized finance' over the last year, indicating massive public interest and confirming the strong market demand for our DeFi education platform.",
          },
          {
            reference: "6-14",
            type: "textarea",
            label: () =>
              "Write a sentence about the size and growth of your industry's Total Addressable Market (T.A.M.), including the source name and source website if possible.",
            key: "YOUR_TAM_SENTENCE",
            required: true,
            helperText:
              "Sample Answer: The Total Addressable Market for green technology in North America is currently valued at **$850 billion** and is expected to grow at a **10% CAGR**, according to the **Fortune Business Insights Report (www.fortunebusinessinsights.com)**.",
          },
          {
            reference: "6-15",
            type: "radio",
            label: () =>
              "Have you looked into attending local Meetup.com events to network or learn more about your industry?",
            key: "YOUR_MEETUP_NETWORKING",
            required: false,
            helperText:
              "Sample Answer: Yes, the CTO regularly attends the 'Bay Area Blockchain Developers' Meetup to identify potential hires and stay current on new protocols.",
          },
          {
            reference: "6-16",
            type: "textarea",
            label: () =>
              "Comment on the percent of the T.A.M. that you would like to capture in 5 years.",
            key: "YOUR_PERCENT_OF_TAM_SENTENCE",
            required: false,
            helperText:
              "Sample Answer: Due to our niche focus on B2B SaaS for law firms, we project capturing **2.5%** of the overall legal technology TAM within 5 years, which translates to a sustainable revenue stream.",
          },
          {
            reference: "6-17",
            type: "textarea",
            label: () =>
              "What are the trends or drivers (things that make the industry do well) in your industry? Comment on industry problems and how your company is the solution.",
            key: "YOUR_INDUSTRY_TRENDS_OR_DRIVERS",
            required: true,
            helperText:
              "Sample Answer: A major driver is the increasing regulatory pressure for data transparency. The core industry problem is the lack of a centralized, auditable data ledger, which our company solves by providing a mandatory blockchain-based logging tool.",
          },
          {
            reference: "6-18",
            type: "textarea",
            label: () =>
              "In one sentence, please explain the problem with the industry that your company is in.",
            key: "YOUR_INDUSTRY_PROBLEM",
            required: true,
            helperText:
              "Sample Answer: The residential solar installation market is currently plagued by non-standardized pricing and opaque installer quality, causing high customer churn and low trust.",
          },
          {
            reference: "6-19",
            type: "textarea",
            label: () =>
              "In one sentence, please explain how your company addresses or fixes the industry problem (Industry Solution).",
            key: "YOUR_INDUSTRY_SOLUTION",
            required: true,
            helperText:
              "Sample Answer: Our platform provides a standardized, algorithm-based quote generator and a verified installer rating system, ensuring price fairness and quality assurance for every solar project.",
          },
          {
            reference: "6-20",
            type: "textarea",
            label: () =>
              "Are there any risks that you wish to discuss with readers of your business plan? If so, comment on how your company can deal with these risks.",
            key: "YOUR_INDUSTRY_RISKS",
            required: true,
            helperText:
              "Sample Answer: The primary risk is the rapid evolution of 5G technology, which could make our current hardware obsolete within 4 years. We mitigate this by using a modular hardware design that allows customers to swap out obsolete components for new modules for a low fee, ensuring future compatibility.",
          },
          {
            reference: "6-21",
            type: "textarea",
            label: () =>
              "What is stopping other competitors from entering the market and competing with your company (Barriers to Entry)?",
            key: "YOUR_BARRIERS_TO_ENTRY",
            required: true,
            helperText:
              "Sample Answer: Our primary barriers to entry are our two approved utility patents on our core fusion process and the massive **Capital Expenditure (CapEx)** required for new entrants to build a similar specialized manufacturing facility.",
          },
          {
            reference: "6-22",
            type: "textarea",
            label: () =>
              "If your business has an increase or decrease in revenue in certain months, please comment on the seasonal nature of your business.",
            key: "YOUR_SEASONALITY",
            required: false,
            helperText:
              "Sample Answer: We experience strong seasonality, with 60% of annual revenue generated between October and December due to holiday gift purchases, requiring us to ramp up inventory production starting in July.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 7,
    hasOutput: true,
    stepTitle: "Competition Analysis",
    sections: [
      {
        sectionId: "7.1",
        sectionTitle: "Top Competitor Profiles",
        questions: [
          {
            reference: "7-3",
            type: "textarea",
            label: () =>
              "Write a brief profile on your largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: HTC's Vive (their higher-end VR product) costs $499* and is targeted at PC gamers. HTC was founded in 1997 in Taiwan and is a large, established multinational corporation with over $4 billion USD in annual revenue. The Vive runs on Valve's Steam platform. *Pricing source: https://www.amazon.com/HTC-VIVE-Virtual-Reality-System-pc/dp/B00VF5NT4I/",
          },
          {
            reference: "7-4",
            type: "textarea",
            label: () =>
              "Write a sentence about your largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Their primary strength is their established global brand recognition and deep integration with Valve's massive PC gaming distribution platform (Steam).",
          },
          {
            reference: "7-5",
            type: "textarea",
            label: () =>
              "Write a sentence about your largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: HTC's hardware has historically been priced higher than competitors and often suffers from lower resolution and a lack of focus on the B2B enterprise market.",
          },
          {
            reference: "7-6",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 2nd largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Oculus (owned by Facebook/Meta) focuses on an all-in-one standalone headset, currently priced at $299. Founded in 2012 and acquired by Facebook in 2014, their company size is massive due to Facebook's backing and headquarters are in Menlo Park, CA. They hold a dominant share of the consumer market.",
          },
          {
            reference: "7-7",
            type: "textarea",
            label: () =>
              "Write a sentence about your 2nd largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Their greatest strength is having the lowest consumer price point, massive marketing budgets, and a large, captive user base tied to the Facebook ecosystem.",
          },
          {
            reference: "7-8",
            type: "textarea",
            label: () =>
              "Write a sentence about your 2nd largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Their weakness is privacy concerns related to user data collection and limited high-end performance specifications for professional applications like film production.",
          },
          {
            reference: "7-9",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 3rd largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Sony offers the PlayStation VR (PS VR), an accessory for the PlayStation console, priced around $350 (plus the console). Sony was founded in 1946 in Japan and is a major multinational electronics corporation. Their market share is largely confined to console owners.",
          },
          {
            reference: "7-10",
            type: "textarea",
            label: () =>
              "Write a sentence about your 3rd largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: Sony benefits from a huge installed base of PlayStation console users and exclusive, high-budget virtual reality game content.",
          },
          {
            reference: "7-11",
            type: "textarea",
            label: () =>
              "Write a sentence about your 3rd largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sample Answer: The PS VR system is tied exclusively to their console platform and has lower technical specifications compared to PC-based solutions.",
          },
          {
            reference: "7-12",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 4th largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: Microsoft has focused on the Windows Mixed Reality platform, with various third-party headsets ranging from $350-$500. Founded in 1975 in Redmond, WA, Microsoft is a technology behemoth that drives the software side of their platform.",
          },
          {
            reference: "7-13",
            type: "textarea",
            label: () =>
              "Write a sentence about your 4th largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: Their core strength is deep integration with the massive Windows operating system and strong B2B enterprise partnerships.",
          },
          {
            reference: "7-14",
            type: "textarea",
            label: () =>
              "Write a sentence about your 4th largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: The platform suffers from fragmented hardware standards and a lack of dedicated, exclusive consumer content.",
          },
          {
            reference: "7-15",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 5th largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: Nintendo has dabbled in VR with their Switch Labo kit, which costs $80 for the cardboard viewer. Founded in 1889 in Japan, they are a gaming giant primarily focused on family-friendly, accessible gaming and toy experiences.",
          },
          {
            reference: "7-16",
            type: "textarea",
            label: () =>
              "Write a sentence about your 5th largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: Nintendo's strength is its beloved intellectual property (IP) and its focus on creative, accessible experiences for a broad, family-oriented audience.",
          },
          {
            reference: "7-17",
            type: "textarea",
            label: () =>
              "Write a sentence about your 5th largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Sample Answer: The system is a low-fidelity, introductory experience that cannot compete in performance with high-end or professional VR systems.",
          },
        ],
      },
      {
        sectionId: "7.2",
        sectionTitle: "Competitive Positioning",
        questions: [
          {
            reference: "7-18",
            type: "textarea",
            label: () =>
              "Write a sentence about how your company's strengths are relative to the competition's strengths.",
            key: "YOUR_STRENGTHS_COMPARED_TO_THE_COMPETITIONS_STRENGTHS",
            required: true,
            helperText:
              "Sample Answer: While competitors have established gaming platforms, our strength lies in our patented proprietary VR platform solution and exclusive content contract with Disney's Marvel Studios, which locks in high-value, unique entertainment content.",
          },
          {
            reference: "7-19",
            type: "textarea",
            label: () =>
              "Write a sentence about how your company's weaknesses compare to the competition's weaknesses.",
            key: "YOUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES",
            required: true,
            helperText:
              "Sample Answer: Our main weakness is lack of brand recognition compared to giants like Sony and Facebook, but our competitors suffer from either high cost or platform fragmentation, issues we avoid with our low-cost, unified approach.",
          },
          {
            reference: "7-20",
            type: "textarea",
            label: () =>
              "Write a sentence about the quality of your company's management team relative to the competition's management team.",
            key: "YOUR_HOW_MANAGEMENT_COMPARED_TO_COMPETITIONS_MANAGEMENT",
            required: true,
            helperText:
              "Sample Answer: While our competitors have large, institutional leadership, our small management team is composed of agile, industry veterans who have all previously launched successful hardware and software products in the virtual reality space, allowing for faster decision-making.",
          },
          {
            reference: "7-21",
            type: "textarea",
            label: () =>
              "Describe why your price is higher or lower than the competition.",
            key: "YOUR_PRICE_OF_YOUR_PRODUCT_OR_SERVICE_COMPARED_TO_THE_COMPETITION",
            required: true,
            helperText:
              "Sample Answer: Our product is priced 20% lower than the nearest direct competitor (HTC Vive) because our patented manufacturing process allows us to be the lowest cost producer in the industry, enabling aggressive pricing to rapidly gain market share.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 8,
    hasOutput: true,
    stepTitle: "Go-To-Market Strategy",
    sections: [
      {
        sectionId: "8.1",
        sectionTitle: "Distribution Channels",
        questions: [
          {
            reference: "8-2",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service over the internet?",
            key: "YOUR_ONLINE_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: Our primary online strategy is selling through our proprietary e-commerce site (Direct-to-Consumer or D2C). We also maintain a presence on Amazon Marketplace to leverage their fulfillment and customer reach for ancillary products.",
          },
          {
            reference: "8-3",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service to retail, wholesale, or resellers?",
            key: "YOUR_OFFLINE_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: We focus on wholesale distribution through two major national sporting goods retailers, granting them exclusivity in exchange for minimum annual sales volume commitments. We do not currently sell through small independent retailers.",
          },
          {
            reference: "8-4",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service directly to your customers (no middle-man)?",
            key: "YOUR_DIRECT_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: We use our internal sales force to handle all sales for large B2B enterprise contracts. This is managed through a high-touch account management model to ensure maximum customer retention and control over the brand experience.",
          },
          {
            reference: "8-5",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service indirectly to your customers (e.g., via a reseller)? Please highlight if you outsource any part of your distribution strategy.",
            key: "YOUR_INDIRECT_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: We utilize certified Value-Added Resellers (VARs) for the international distribution of our software licenses. We **outsource** all physical warehousing, logistics, and shipping to a third-party logistics (3PL) provider.",
          },
        ],
      },
      {
        sectionId: "8.2",
        sectionTitle: "Distribution Costs",
        questions: [
          {
            reference: "8-6",
            type: "textarea",
            label: () =>
              "What is the cost to distribute/sell your product or service to your customers? (Be brief; detailed costs will be covered in Step 12: Financials).",
            key: "YOUR_COST_OF_DISTRIBUTION",
            required: true,
            helperText:
              "Sample Answer: The primary cost of distribution is the **15% commission** paid to our channel partners (VARs). For D2C sales, the average shipping cost is $8.50 per unit, which is mostly subsidized by the customer.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 9,
    hasOutput: true,
    stepTitle: "Sales and Marketing",
    sections: [
      {
        sectionId: "9.1",
        sectionTitle: "Sales Force and Incentives",
        questions: [
          {
            reference: "9-1",
            type: "textarea",
            label: () =>
              "How is your sales team structured (if applicable)? Discuss who is in charge of selling to certain geographies, industry verticals, large accounts, or telesales, etc.",
            key: "YOUR_SALES_FORCE_STRUCTURE",
            required: false,
            helperText:
              "Sample Answer: Our sales force is structured into two main teams: 1) Enterprise Sales (3 employees) handles all accounts over $50k ARR and is vertical-focused (Healthcare and Finance). 2) Mid-Market Telesales (5 employees) handles all accounts under $50k ARR across all geographies.",
          },
          {
            reference: "9-2",
            type: "textarea",
            label: () =>
              "How is your salesforce (if applicable) incentivized to sell your company's products or services (i.e., commission structure)? How do you motivate your employees?",
            key: "YOUR_SALES_FORCE_INCENTIVES",
            required: false,
            helperText:
              "Sample Answer: Sales employees receive a **50/50 base salary/commission split**. Commission is 10% of the first year's contract value, with a 5% bonus for hitting quarterly team targets. We motivate staff through an unlimited Paid Time Off (PTO) policy and monthly public recognition for top performers.",
          },
          {
            reference: "9-3",
            type: "textarea",
            label: () =>
              "If applicable, mention if your employees are certified or licensed to sell the product (e.g., in the financial services industry, you often need certifications prior to selling products).",
            key: "YOUR_SALES_FORCE_REGISTRATION_OR_LICENSES",
            required: false,
            helperText:
              "Sample Answer: As our product involves investment advice, all 8 sales employees must hold and maintain a valid **Series 7 and Series 63** certification. The company covers all licensing and continuing education costs.",
          },
        ],
      },
      {
        sectionId: "9.2",
        sectionTitle: "Marketing Strategies",
        questions: [
          {
            reference: "9-6",
            type: "textarea",
            label: () => "Comment on your overall social media strategy.",
            key: "YOUR_SOCIAL_MEDIA_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: We use a **Thought Leadership** strategy on LinkedIn and Twitter (daily posts of original research) to attract B2B leads. Instagram is used primarily for **Employer Branding** (showcasing company culture) to aid recruitment.",
          },
          {
            reference: "9-7",
            type: "textarea",
            label: () =>
              "Comment on your email marketing campaign or lead generation campaign (meaning how to get customers from online sources).",
            key: "YOUR_LEAD_GENERATION_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: Our lead generation is driven by offering a free 'Market Snapshot' PDF in exchange for an email address (gated content). Leads are then funneled into a 4-part **drip email campaign** (using ActiveCampaign) that introduces the product benefits before offering a free trial.",
          },
          {
            reference: "9-8",
            type: "textarea",
            label: () =>
              "If applicable, comment on your non-internet based marketing campaigns (e.g., radio, TV, newspapers, tradeshows, etc.).",
            key: "YOUR_OFFLINE_MEDIA_STRATEGY",
            required: true,
            helperText:
              "Sample Answer: Our primary offline strategy is attending the **top three industry tradeshows** (e.g., CES, Money20/20) annually to generate high-quality B2B leads and secure distribution partnerships. We budget for a full-page ad in the official show guide for all three events.",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 10,
    hasOutput: true,
    stepTitle: "Milestones",
    sections: [
      {
        sectionId: "10.1",
        sectionTitle: "Future Financial and Growth Milestones",
        questions: [
          {
            reference: "10-2",
            type: "textarea",
            label: () =>
              "What are your revenue goals for 1, 3, 5, and 10 years from now? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_REVENUE_MILESTONES",
            required: true,
            helperText:
              "Sample Answer: Year 1: $500K (Pilot program completion). Year 3: $8M (Regional expansion). Year 5: $25M (National presence and new product launch). Year 10: $100M+ (International expansion/potential M&A).",
          },
          {
            reference: "10-3",
            type: "textarea",
            label: () =>
              "If applicable, what are your units sold milestones in 1, 3, 5, and 10 years? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_UNIT_SALES_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Year 1: 5,000 units sold (Achieved via direct-to-consumer e-commerce). Year 3: 50,000 units (Achieved via distribution agreement with two major retailers). Year 5: 150,000 units (Achieved via global market entry).",
          },
          {
            reference: "10-4",
            type: "textarea",
            label: () =>
              "What percent of the Total Addressable Market (TAM) do you plan on capturing in 1, 3, 5, and 10 years? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_TAM_PERCENT_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Year 1: 0.1% (Focus on high-value niche clients). Year 3: 0.5% (Achieved by targeting top 10 US metro areas). Year 5: 2.0% (Achieved by expanding product line and establishing international sales channels). Year 10: 5.0%.",
          },
          {
            reference: "10-5",
            type: "text",
            label: () =>
              "Mention what year you plan on achieving break-even (reaching profitability).",
            key: "YOUR_FUTURE_BREAK_EVEN_MILESTONE",
            required: true,
            helperText:
              "Sample Answer: We project reaching break-even status in Year 3, based on achieving $8M in revenue and successfully controlling operational expenses.",
          },
          {
            reference: "10-6",
            type: "textarea",
            label: () =>
              "If applicable, mention what margin milestones are (e.g., Gross Margin, Net Margin)?",
            key: "YOUR_FUTURE_PROFIT_MARGINS_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Target Gross Margin: 60% by the end of Year 2 (achieved through scale manufacturing). Target Net Margin: 15% by the end of Year 4 (achieved through efficient automation of customer service).",
          },
          {
            reference: "10-7",
            type: "textarea",
            label: () =>
              "What are your future products or services that you intend on releasing milestones? Feel free to explain how you intend to reach these product or service future milestones.",
            key: "YOUR_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES",
            required: true,
            helperText:
              "Sample Answer: Q4 Year 2: Launch 'Pro-Analytics Dashboard' (SaaS add-on for Enterprise clients). Q2 Year 4: Release V3.0 hardware model (with integrated AI chip). These will be reached by reallocating R&D resources based on customer feedback from the core V2.0 product.",
          },
          {
            reference: "10-8",
            type: "textarea",
            label: () =>
              "What are your future geographic based milestones (i.e., opening an office in other regions or countries)? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_GEOGRAPHIC_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Q1 Year 3: Establish a sales and support office in London to service the EMEA market. This will be reached by utilizing the funds raised in our Series A round.",
          },
          {
            reference: "10-9",
            type: "textarea",
            label: () =>
              "Discuss any other future milestones not already accounted for in your previous answers.",
            key: "YOUR_FUTURE_OTHER_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Achieve ISO 27001 security certification by the end of Year 1; hire a Chief Operating Officer (COO) by the end of Year 2.",
          },
          {
            reference: "10-10",
            type: "textarea",
            label: () =>
              "If you plan on selling your company or doing an IPO (initial public offering) to put your company on the stock market, please mention it here.",
            key: "YOUR_FUTURE_EXIT_STRATEGY_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Planning for an Initial Public Offering (IPO) in Year 7, contingent upon achieving $100M in annual recurring revenue (ARR) and demonstrating two consecutive years of strong profitability.",
          },
        ],
      },
      {
        sectionId: "10.2",
        sectionTitle: "Past Achievements",
        questions: [
          {
            reference: "10-11",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant revenue milestones you have already achieved.",
            key: "YOUR_PAST_REVENUE_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Achieved $100,000 in Annual Recurring Revenue (ARR) within the first 6 months of launching the Beta program.",
          },
          {
            reference: "10-12",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant sales unit milestones you have already achieved.",
            key: "YOUR_PAST_UNIT_SALES_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Sold 2,500 units of the V1.0 hardware within the first 90 days of launch.",
          },
          {
            reference: "10-13",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant TAM percent milestones you have already achieved.",
            key: "YOUR_PAST_TAM_PERCENT_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Captured 5% of the local Denver startup market for our specialized consulting service.",
          },
          {
            reference: "10-14",
            type: "text",
            label: () =>
              "If applicable, mention when you achieved break-even status (meaning revenue > expenses).",
            key: "YOUR_PAST_BREAK_EVEN_MILESTONE_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Achieved break-even status in Month 18 of operation.",
          },
          {
            reference: "10-15",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant profit margin milestones you have already achieved.",
            key: "YOUR_PAST_PROFIT_MARGINS_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Sustained a Gross Margin of 45% throughout the second year of operations.",
          },
          {
            reference: "10-16",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant product or service milestones you have already achieved.",
            key: "YOUR_PAST_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Completed final QA testing and launched the V2.0 software platform on time and under budget.",
          },
          {
            reference: "10-17",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant geographic based milestones you have already achieved.",
            key: "YOUR_PAST_GEOGRAPHIC_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Sample Answer: Successfully expanded service availability to all 50 US states in Q4 of Year 1.",
          },
          {
            reference: "10-18",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant other milestones you have already achieved.",
            key: "YOUR_PAST_OTHER_MILESTONES",
            required: false,
            helperText:
              "Sample Answer: Recruited and onboarded the full initial engineering team; Secured the second patent (Utility Patent #9,876,543).",
          },
        ],
      },
    ],
  },
  {
    stepNumber: 11,
    hasOutput: true,
    stepTitle: "Other / Miscellaneous Risks",
    sections: [
      {
        sectionId: "11.1",
        sectionTitle: "Strategic and External Risks",
        questions: [
          {
            reference: "11-1",
            type: "textarea",
            label: () =>
              "What is the risk that future technology developments might have on your business model, and how would you react?",
            key: "YOUR_RISKS_FUTURE_TECHNOLOGY_DEVELOPMENTS",
            required: true,
            helperText:
              "Sample Answer: Risk: The emergence of quantum computing could render our current encryption obsolete. Reaction: We mitigate this by dedicating 10% of our R&D budget to tracking post-quantum cryptography standards and maintaining a partnership with a leading university research lab to ensure we are always prepared to implement the latest compliant protocols.",
          },
          {
            reference: "11-2",
            type: "textarea",
            label: () =>
              "What is the risk that future competitive threats might have on your business model? For example, if a large industry company competes with you, how would you react?",
            key: "YOUR_RISKS_FUTURE_COMPETITION_EMERGES",
            required: true,
            helperText:
              "Sample Answer: Risk: Amazon launching a competing white-label service could instantly undercut our prices. Reaction: Our defense is two-fold: focus on deep, localized relationships (high-touch service model) that large corporations cannot replicate, and maintain a 50% lower Cost of Customer Acquisition (CAC) to enable a flexible pricing floor.",
          },
          {
            reference: "11-3",
            type: "textarea",
            label: () =>
              "What is the risk that future macroeconomic developments (e.g., recessions, interest rate spikes) might have on your business model, and how would you react?",
            key: "YOUR_RISKS_FUTURE_MACROECONOMIC_DEVELOPMENTS",
            required: true,
            helperText:
              "Sample Answer: Risk: A severe recession could cause businesses to freeze discretionary spending on non-essential software. Reaction: Our product is designed to save clients money on labor, making it a defensive purchase. We would emphasize the ROI in our sales messaging and shift focus to clients with long-term capital contracts (e.g., government agencies).",
          },
          {
            reference: "11-4",
            type: "textarea",
            label: () =>
              "What other risks or developments might occur that could impact your business model, and how would you react?",
            key: "YOUR_RISKS_FUTURE_OTHER_DEVELOPMENTS",
            required: true,
            helperText:
              "Sample Answer: Risk: Unforeseen changes in international data residency laws could limit our global expansion plans. Reaction: We react by deploying our platform using a segmented multi-region cloud architecture (AWS) that allows client data to be stored and processed only within its legal jurisdiction, ensuring immediate compliance.",
          },
        ],
      },
      {
        sectionId: "11.2",
        sectionTitle: "Operational and Perceptual Risks",
        questions: [
          {
            reference: "11-5",
            type: "textarea",
            label: () =>
              "What is your disaster recovery plan (e.g., do you have remote backup of your data)?",
            key: "YOUR_RISKS_DISASTER_RECOVERY",
            required: true,
            helperText:
              "Sample Answer: We follow the 3-2-1 backup rule (3 copies of data, 2 different media types, 1 copy offsite). All production data is backed up hourly to a separate AWS region in Ireland, and recovery time objective (RTO) is less than 4 hours, ensuring business continuity during a regional outage.",
          },
          {
            reference: "11-6",
            type: "textarea",
            label: () =>
              "What do you think is the most misunderstood aspect of your business model from your potential or current customers?",
            key: "YOUR_MOST_MISUNDERSTOOD_ASPECT_OF_YOUR_BUSINESS_PLAN",
            required: false,
            helperText:
              "Sample Answer: The most misunderstood aspect is the perceived complexity of integrating our hardware. While the technology is advanced, the installation process is actually plug-and-play, taking less than 15 minutes. We address this by featuring a prominent '15-Minute Setup Guarantee' video on our homepage.",
          },
        ],
      },
    ],
  },
  { stepNumber: 12, hasOutput: true, stepTitle: "Financials", sections: [] },
  {
    stepNumber: 13,
    hasOutput: true,
    stepTitle: "Appendix",
    sections: [
      {
        sectionId: "13.1",
        sectionTitle: "Resumes and Team Documents",
        questions: [
          {
            reference: "13-1",
            type: "radio",
            label: () =>
              "Do you have your resume ready in MS Word format to include in the Appendix?",
            key: "YOUR_RESUME",
            required: true,
            helperText: "Upload your resume.",
          },
          {
            reference: "13-2",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_1_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_FIRST_EMPLOYEES_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-3",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_2_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_SECOND_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-4",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_3_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_THIRD_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-5",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_4_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_FOURTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_5_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_FIFTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_6_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_SIXTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_7_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_SEVENTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_8_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_EIGTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_9_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_NINTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
          {
            reference: "13-6",
            type: "radio",
            label: (value?: string) =>
              `Do you have the ${value}'s resume ready in MS Word format to include in the Appendix?`,
            key: "YOUR_TEAM_MEMBER_10_RESUME",
            required: false,
            shouldHaveValue: true,
            values: { key: "YOUR_TENTH_EMPLOYEE_NAME" },
            helperText:
              "Remember: Upload member resume in business plan template.",
          },
        ],
      },
      {
        sectionId: "13.2",
        sectionTitle: "Supporting Exhibits",
        questions: [
          {
            reference: "13-13",
            type: "radio",
            label: () =>
              "Do you have any product or service brochures or PDFs ready in MS Word/PDF format to include in the Appendix?",
            key: "YOUR_BROCHURES",
            required: true,
            helperText:
              "Sample Answer: Yes, we have our three-page product data sheet ready for inclusion as an exhibit.",
          },
          {
            reference: "13-14",
            type: "radio",
            label: () =>
              "Do you want to include some financial statements in the Appendix instead of, or in addition to, Step 12?",
            key: "YOUR_FINANCIALS_IN_APPENDIX",
            required: true,
            helperText:
              "Sample Answer: Yes, we want to include detailed monthly cash flow statements in the Appendix for investor review.",
          },
          {
            reference: "13-15",
            type: "textarea",
            label: () =>
              "Are there any other documents or exhibits you want to include in the Appendix that we have not discussed yet (e.g., patents, legal agreements)?",
            key: "YOUR_OTHER_DOCUMENTS_APPENDIX",
            required: true,
            helperText:
              "Sample Answer: We will include copies of our two approved utility patents and the exclusive distribution agreement with the manufacturer.",
          },
        ],
      },
    ],
  },
  { stepNumber: 14, hasOutput: true, stepTitle: "Download", sections: [] },
];

export const TEMPLATES: Template[] = [
  {
    id: "pdf",
    name: "PDF Document",
    description: "Download as PDF for submission and sharing",
    format: "pdf",
    previewImageUrl: "/placeholder.svg",
  },
  {
    id: "pptx",
    name: "PowerPoint Presentation",
    description: "Download as PPTX for presentations",
    format: "pptx",
    previewImageUrl: "/placeholder.svg",
  },
];
