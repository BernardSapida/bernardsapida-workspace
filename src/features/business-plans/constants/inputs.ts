import type { BusinessPlanStep, Template } from "../types";
import { LEGAL_DISCLOSURES, OUTPUTS } from "./outputs";

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
            helperText:
              "Like writing your name on a Starbucks cup — it identifies the owner.",
          },
          {
            reference: "1-2",
            type: "text",
            label: () => "Company Name",
            key: "YOUR_COMPANY_NAME",
            required: true,
            helperText:
              "The name of your business, like the store name on a Starbucks branch.",
          },
          {
            reference: "1-3",
            type: "textarea",
            label: () => "Product or Service Description (Max 15 words)",
            key: "YOUR_PRODUCT_OR_SERVICE_DESCRIPTION",
            required: true,
            helperText:
              "A short description, like how Starbucks labels a drink so anyone understands it quickly.",
          },
          {
            reference: "1-12",
            type: "select",
            label: () => "Primary Reader of this Business Plan",
            key: "YOUR_BUSINESS_PLAN_READER",
            required: true,
            helperText:
              "Choose who needs to read and understand your plan, like choosing who your drink is for.",
            options: [
              { label: "Yourself", value: "Yourself" },
              { label: "Your team", value: "Your team" },
              { label: "Your board", value: "Your board" },
              { label: "Your boss", value: "Your boss" },
              { label: "New hires", value: "New hires" },
              { label: "Donors", value: "Donors" },
              { label: "Customers", value: "Customers" },
              { label: "Business partners", value: "Business partners" },
            ],
          },
          {
            reference: "1-14",
            type: "select",
            label: () => "Year Company Founded",
            key: "YOUR_YEAR_FOUNDED",
            required: true,
            helperText:
              "The year your business officially started, like the opening date of a store.",
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
              "The category your business belongs to, like how Starbucks is in the coffee industry.",
          },
          {
            reference: "1-67",
            type: "textarea",
            label: () => "Company Mission Statement",
            key: "YOUR_MISSION_STATEMENT",
            required: true,
            helperText:
              "Your company's purpose, like Starbucks' mission to inspire and nurture the human spirit.",
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
            helperText:
              "Your main contact email — like the store's official Starbucks contact line.",
          },
          {
            reference: "1-6",
            type: "text",
            label: () => "Internet Address (URL)",
            key: "YOUR_INTERNET_ADDRESS",
            required: false,
            helperText:
              "Your website link, similar to Starbucks.com being the main online home.",
          },
          {
            reference: "1-7",
            type: "radio",
            label: () => "Have you created a website for your company?",
            key: "YOUR_HAVE_YOU_CREATED_INTERNET_ADDRESS",
            required: false,
            helperText:
              "Select yes if your business has a live website, like a Starbucks store having an online page.",
          },
          {
            reference: "1-8",
            type: "text",
            label: () => "Business Address (City/State/Country)",
            key: "YOUR_POST_ADDRESS",
            required: false,
            helperText:
              "Your business location, like listing the city where a Starbucks branch operates.",
          },
          {
            reference: "1-9",
            type: "textarea",
            label: () => "Address Choice Rationale",
            key: "YOUR_ADDRESS_CHOICE_REASON",
            required: false,
            helperText:
              "Explain why you chose this spot, like why a Starbucks opens in a busy or strategic area.",
          },
          {
            reference: "1-10",
            type: "text",
            label: () => "Phone Number",
            key: "YOUR_PHONE_NUMBER",
            required: true,
            helperText:
              "Your main business phone number, like the contact line for a store branch.",
          },
          {
            reference: "1-11",
            type: "select",
            label: () => "Primary Country for Filing Taxes",
            key: "YOUR_COUNTRY_YOUR_BUSINESS_IS_HEADQUARTERED_IN",
            required: false,
            helperText:
              "The country where your business handles taxes, similar to a Starbucks headquarters location.",
            options: [{ label: "Philippines", value: "Philippines" }],
          },
          {
            reference: "1-83",
            type: "textarea",
            label: () => "Reason for Location Choice",
            key: "YOUR_LOCATION_REASON_DETAILED",
            required: false,
            helperText:
              "Describe the strategic reasons behind your location, like why a Starbucks chooses a high-traffic area.",
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
              "Check if your name or website is already taken, like checking if a Starbucks drink name is already used.",
          },
          {
            reference: "1-13",
            type: "radio",
            label: () =>
              "Do you plan on using this business plan to raise money?",
            key: "YOUR_PLAN_TO_RAISE_MONEY",
            required: false,
            helperText:
              "Choose yes if this plan is meant for investors or lenders, like presenting a new Starbucks store proposal.",
          },
          {
            reference: "1-16",
            type: "text",
            label: () => "Legal Structure of Company",
            key: "YOUR_LEGAL_STRUCTURE",
            required: false,
            helperText:
              "Select your business type, like choosing whether a Starbucks branch is franchise-owned or corporate-owned.",
            options: [
              { label: "Sole Proprietorship", value: "Sole Proprietorship" },
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
              "List who owns the business, like naming who owns a Starbucks franchise location.",
          },
          {
            reference: "1-22",
            type: "radio",
            label: () => "Have you registered your company name?",
            key: "YOUR_REGISTERED_COMPANY_NAME",
            required: false,
            helperText:
              "Check if your business name is officially registered, like securing approval for a new store name.",
          },
          {
            reference: "1-23",
            type: "radio",
            label: () => "Do you have business insurance?",
            key: "YOUR_BUSINESS_INSURANCE",
            required: false,
            helperText:
              "Confirm if your business is insured, similar to how every Starbucks store is fully covered.",
          },
          {
            reference: "1-24",
            type: "radio",
            label: () => "Have you looked into getting a government grant?",
            key: "YOUR_GOVERNMENT_GRANT",
            required: false,
            helperText:
              "Check if you've explored government funding options, like support for opening a new store in a community.",
          },
          {
            reference: "1-84",
            type: "radio",
            label: () =>
              "Do you need a license to operate, and has it been received?",
            key: "YOUR_LICENSE_RECEIVED",
            required: false,
            helperText:
              "Check if you need permits and if they're approved, like a Starbucks needing health and business permits.",
          },
          {
            reference: "1-85",
            type: "radio",
            label: () => "Have you set up a consultation with a tax lawyer?",
            key: "YOUR_TAX_LAWYER_CONSULTATION",
            required: false,
            helperText:
              "Indicate if you've talked to a tax expert, similar to how big companies consult professionals for compliance.",
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
            helperText:
              "Check yes if you've legally protected your product, like how Starbucks protects a new drink recipe.",
          },
          {
            reference: "1-18",
            type: "radio",
            label: () =>
              "Have you filed for a copyright(s) for the product or service?",
            key: "YOUR_FILED_COPYRIGHT",
            required: false,
            helperText:
              "Select yes if your creative work is protected, like Starbucks copyrighting marketing materials or artwork.",
          },
          {
            reference: "1-19",
            type: "radio",
            label: () =>
              "Have you filed a trademark(s) for the product or service?",
            key: "YOUR_FILED_TRADEMARK",
            required: false,
            helperText:
              "Check yes if your brand name or logo is legally protected, like the Starbucks logo or name.",
          },
          {
            reference: "1-21",
            type: "radio",
            label: () =>
              "Do you plan on using Non-Disclosure Agreements (NDA) with readers?",
            key: "YOUR_PLAN_ON_NDA",
            required: false,
            helperText:
              "Select yes if you want readers to keep your plan secret, like sharing a secret Starbucks recipe only under agreement.",
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
              "Enter the first team member, like naming the first barista in a new Starbucks store.",
          },
          {
            reference: "1-27",
            type: "text",
            label: () => "Second Employee's Name",
            key: "YOUR_SECOND_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the second team member, like adding another barista to help during busy hours.",
          },
          {
            reference: "1-28",
            type: "text",
            label: () => "Third Employee's Name",
            key: "YOUR_THIRD_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the third team member, like another staff member joining the Starbucks team.",
          },
          {
            reference: "1-29",
            type: "text",
            label: () => "Fourth Employee's Name",
            key: "YOUR_FOURTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the fourth team member, like building a full Starbucks shift crew.",
          },
          {
            reference: "1-30",
            type: "text",
            label: () => "Fifth Employee's Name",
            key: "YOUR_FIFTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the fifth team member, like having a complete Starbucks barista team.",
          },
          {
            reference: "1-31",
            type: "text",
            label: () => "Sixth Employee's Name",
            key: "YOUR_SIXTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the sixth team member, similar to adding more staff to cover peak hours.",
          },
          {
            reference: "1-32",
            type: "text",
            label: () => "Seventh Employee's Name",
            key: "YOUR_SEVENTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the seventh team member, like completing the Starbucks weekend shift crew.",
          },
          {
            reference: "1-33",
            type: "text",
            label: () => "Eighth Employee's Name",
            key: "YOUR_EIGTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the eighth team member, like having extra staff for a busy store day.",
          },
          {
            reference: "1-34",
            type: "text",
            label: () => "Ninth Employee's Name",
            key: "YOUR_NINTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the ninth team member, like adding more baristas to handle the crowd.",
          },
          {
            reference: "1-35",
            type: "text",
            label: () => "Tenth Employee's Name",
            key: "YOUR_TENTH_EMPLOYEE_NAME",
            required: false,
            helperText:
              "Enter the tenth team member, like completing a full Starbucks store staff.",
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
            helperText:
              "Your main advantage, like Starbucks having high-quality coffee and brand recognition.",
          },
          {
            reference: "1-69",
            type: "textarea",
            label: () => "Number 2 Strength vs. Competition",
            key: "YOUR_STRENGTH_2",
            required: true,
            helperText:
              "Your second advantage, like Starbucks' cozy store atmosphere that keeps customers coming back.",
          },
          {
            reference: "1-70",
            type: "textarea",
            label: () => "Number 3 Strength vs. Competition",
            key: "YOUR_STRENGTH_3",
            required: true,
            helperText:
              "Your third advantage, like Starbucks' ability to customize drinks for each customer.",
          },
          {
            reference: "1-71",
            type: "textarea",
            label: () => "Number 4 Strength vs. Competition",
            key: "YOUR_STRENGTH_4",
            required: false,
            helperText:
              "Optional: Another advantage, like Starbucks' strong loyalty program for repeat customers.",
          },
          {
            reference: "1-72",
            type: "textarea",
            label: () => "Number 5 Strength vs. Competition",
            key: "YOUR_STRENGTH_5",
            required: false,
            helperText:
              "Optional: Another advantage, like Starbucks' global presence making it convenient everywhere.",
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
              "Your main weakness, like Starbucks' higher prices compared to some local coffee shops.",
          },
          {
            reference: "1-74",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 1",
            key: "YOUR_DECREASE_RISK_WEAKNESS_1",
            required: true,
            helperText:
              "How you plan to fix it, like offering promotions to balance Starbucks' higher prices.",
          },
          {
            reference: "1-75",
            type: "textarea",
            label: () => "Number 2 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_2",
            required: true,
            helperText:
              "Another weakness, like limited local flavors compared to competitors.",
          },
          {
            reference: "1-76",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 2",
            key: "YOUR_DECREASE_RISK_WEAKNESS_2",
            required: true,
            helperText:
              "How to address it, like adding seasonal local drinks to your menu.",
          },
          {
            reference: "1-77",
            type: "textarea",
            label: () => "Number 3 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_3",
            required: true,
            helperText: "Another weakness, like long lines during peak hours.",
          },
          {
            reference: "1-78",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 3",
            key: "YOUR_DECREASE_RISK_WEAKNESS_3",
            required: true,
            helperText:
              "How to fix it, like adding staff or self-service kiosks.",
          },
          {
            reference: "1-79",
            type: "textarea",
            label: () => "Number 4 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_4",
            required: false,
            helperText:
              "Optional: Another weakness, like limited parking at some Starbucks locations.",
          },
          {
            reference: "1-80",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 4",
            key: "YOUR_DECREASE_RISK_WEAKNESS_4",
            required: false,
            helperText:
              "Optional: How to reduce it, like partnering with nearby lots or offering delivery.",
          },
          {
            reference: "1-81",
            type: "textarea",
            label: () => "Number 5 Weakness vs. Competition",
            key: "YOUR_WEAKNESS_5",
            required: false,
            helperText:
              "Optional: Another weakness, like slower service in some branches.",
          },
          {
            reference: "1-82",
            type: "textarea",
            label: () => "Mitigation Plan for Weakness 5",
            key: "YOUR_DECREASE_RISK_WEAKNESS_5",
            required: false,
            helperText:
              "Optional: How to fix it, like training staff or improving workflow.",
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
              "Check yes if you've explored networking events, like Starbucks baristas learning tips from other stores.",
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
              "Who will complete this step, like a barista making a new Starbucks drink.",
          },
          {
            reference: "1-37",
            type: "date",
            label: () => "Deadline for General Business Plan Inputs (Step 1)",
            key: "STEP_1_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date for Step 1, like a new drink launch day at Starbucks.",
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
            helperText:
              "Who will make the cover page, like designing the Starbucks menu board.",
          },
          {
            reference: "1-39",
            type: "date",
            label: () => "Deadline for Cover Page (Step 2)",
            key: "STEP_2_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date for the cover page, like a store opening deadline.",
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
              "Who will write the summary, like preparing a Starbucks store report for management.",
          },
          {
            reference: "1-41",
            type: "date",
            label: () => "Deadline for Executive Summary (Step 3)",
            key: "STEP_3_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date for the summary, like a weekly Starbucks team report deadline.",
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
              "Who will complete management details, like a Starbucks shift manager organizing the team.",
          },
          {
            reference: "1-43",
            type: "date",
            label: () => "Deadline for Management Section (Step 4)",
            key: "STEP_4_DUE_DATE_IS",
            required: false,
            helperText:
              "Set the target date, like preparing schedules for Starbucks staff.",
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
              "Who will write product/service details, like describing a new Starbucks beverage.",
          },
          {
            reference: "1-45",
            type: "date",
            label: () => "Deadline for Product/Service Section (Step 5)",
            key: "STEP_5_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like the launch date of a Starbucks product.",
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
              "Who will complete customer/market info, like Starbucks analyzing local preferences.",
          },
          {
            reference: "1-47",
            type: "date",
            label: () => "Deadline for Customer & Market Section (Step 6)",
            key: "STEP_6_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like finishing Starbucks market research for a new store.",
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
              "Who will analyze competition, like Starbucks comparing local coffee shops.",
          },
          {
            reference: "1-49",
            type: "date",
            label: () => "Deadline for Competition Section (Step 7)",
            key: "STEP_7_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like finishing Starbucks competitor research.",
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
              "Who will plan go-to-market, like Starbucks planning a new drink rollout.",
          },
          {
            reference: "1-51",
            type: "date",
            label: () => "Deadline for Go-to Market Strategy (Step 8)",
            key: "STEP_8_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like the rollout date of a Starbucks promotion.",
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
              "Who will handle sales/marketing, like Starbucks planning promotions and ads.",
          },
          {
            reference: "1-53",
            type: "date",
            label: () => "Deadline for Sales & Marketing Section (Step 9)",
            key: "STEP_9_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like completing a Starbucks marketing campaign.",
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
              "Who will track milestones, like Starbucks tracking product launches.",
          },
          {
            reference: "1-55",
            type: "date",
            label: () => "Deadline for Milestones Section (Step 10)",
            key: "STEP_10_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like when Starbucks expects a product milestone.",
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
              "Who will handle financials, like Starbucks tracking store profits.",
          },
          {
            reference: "1-57",
            type: "date",
            label: () => "Deadline for Financials Section (Step 11)",
            key: "STEP_11_DUE_DATE_IS",
            required: false,
            helperText: "Target date, like closing Starbucks monthly accounts.",
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
              "Who will prepare the appendix, like Starbucks adding extra data to reports.",
          },
          {
            reference: "1-59",
            type: "date",
            label: () => "Deadline for Appendix Section (Step 12)",
            key: "STEP_12_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date for appendix, like finishing additional Starbucks documentation.",
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
              "Who will handle miscellaneous tasks, like Starbucks handling side projects.",
          },
          {
            reference: "1-61",
            type: "date",
            label: () => "Deadline for Other / Miscellaneous Section (Step 13)",
            key: "STEP_13_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like completing side tasks in Starbucks stores.",
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
              "Who will compile and format the final plan, like Starbucks preparing store manuals.",
          },
          {
            reference: "1-63",
            type: "date",
            label: () => "Deadline for FINAL OUTPUT Business Plan",
            key: "STEP_FINAL_OUTPUT_BUSINESS_PLAN_DUE_DATE_IS",
            required: false,
            helperText:
              "Final target date, like Starbucks launching a new store guide.",
          },
          {
            reference: "1-64",
            type: "text",
            label: () => "Owner of FINAL OUTPUT Presentation Slides Formatting",
            key: "STEP_FINAL_OUTPUT_PRESENTATION_SLIDES_IS_ASSIGNED_TO",
            required: false,
            helperText:
              "Who will format the slides, like Starbucks preparing training slides.",
          },
          {
            reference: "1-65",
            type: "date",
            label: () => "Deadline for FINAL OUTPUT Presentation Slides",
            key: "STEP_FINAL_OUTPUT_PRESENTATION_SLIDES_DUE_DATE_IS",
            required: false,
            helperText:
              "Target date, like Starbucks completing store training slides.",
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
            label: () => "Do you have a company logo?",
            key: "YOUR_COMPANY_LOGO_QUESTION",
            required: true,
            helperText:
              "Check yes if you already have a logo, like a Starbucks cup design ready.",
          },
          {
            reference: "2-2",
            type: "text",
            label: () => "Upload your company logo",
            key: "YOUR_LOGO",
            required: false,
            helperText:
              "Upload the logo(s) you want on the cover, like showing your Starbucks cup designs.",
          },
          {
            reference: "2-3",
            type: "date",
            label: () => "Cover Page Date",
            key: "YOUR_COVER_PAGE_DATE",
            required: true,
            helperText:
              "The date that will appear on the cover, like a Starbucks menu update date.",
          },
          {
            reference: "2-4",
            type: "select",
            label: () => "Legal Disclosure",
            key: "YOUR_COVER_PAGE_LEGAL_DISCLOSURE",
            required: true,
            helperText:
              "Choose if you want a legal statement at the bottom, like a Starbucks confidentiality note.",
            options: [
              { label: "Template 1", value: 0 },
              { label: "Template 2", value: 1 },
              { label: "Template 3", value: 2 },
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
    outputs: OUTPUTS.step2,
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
              "Your main advantage vs. competitors, like Starbucks having premium coffee and fast service.",
          },
          {
            reference: "3-16",
            type: "textarea",
            label: () =>
              "Why is now the right time to launch or grow this company? (Market Timing)",
            key: "YOUR_WHY_NOW",
            required: true,
            helperText:
              "Explain why the timing is right, like Starbucks expanding when coffee culture boomed.",
          },
          {
            reference: "3-23",
            type: "textarea",
            label: () =>
              "What core industry problem does your company address?",
            key: "YOUR_PROBLEM_THAT_YOUR_COMPANY_ADDRESSES",
            required: true,
            helperText:
              "Describe the problem your customers face, like lack of quality coffee shops in a city.",
          },
          {
            reference: "3-24",
            type: "textarea",
            label: () => "What is your company's solution to this problem?",
            key: "YOUR_SOLUTION_TO_THE_PROBLEM",
            required: true,
            helperText:
              "Explain your solution simply, like Starbucks providing consistent, high-quality coffee everywhere.",
          },
          {
            reference: "3-25",
            type: "text",
            label: () => "Can you provide an image or mockup of your product?",
            key: "YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT",
            required: false,
            helperText:
              "Optional: Upload a photo or mockup of your product, like a Starbucks cup or menu item image.",
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
              "Describe your ideal customer clearly, like Starbucks targeting young professionals who love coffee and convenience.",
          },
          {
            reference: "3-2",
            type: "text",
            label: () =>
              "What is the geographical focus for your customer base during the first 2 years?",
            key: "YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_WITHIN_THE_FIRST_2_YEARS",
            required: true,
            helperText:
              "Where you will sell first, like Starbucks starting in major cities before expanding.",
          },
          {
            reference: "3-3",
            type: "text",
            label: () =>
              "What is the target geographical expansion for your customer base by Year 5?",
            key: "YOUR_LOCATION_OF_THE_IDEAL_CUSTOMER_IN_5_YEARS",
            required: true,
            helperText:
              "Where you plan to expand later, like Starbucks reaching multiple countries within 5 years.",
          },
          {
            reference: "3-4",
            type: "textarea",
            label: () =>
              "Are there any other important demographic details or targeting details?",
            key: "YOUR_OTHER_DEMOGRAPHIC_DETAILS",
            required: false,
            helperText:
              "Any extra targeting info, like Starbucks focusing on office workers near downtown locations.",
          },
          {
            reference: "3-5",
            type: "text",
            label: () =>
              "What is the current size (in currency or number of users) of your Total Addressable Market (TAM)?",
            key: "YOUR_TAM",
            required: true,
            helperText:
              "Estimate the total market size, like Starbucks knowing the total coffee shop market in the city is $2B.",
          },
          {
            reference: "3-6",
            type: "text",
            label: () =>
              "What is the annual percentage growth rate of the TAM?",
            key: "YOUR_GROWTH_RATE_OF_THE_TAM",
            required: true,
            helperText:
              "Show how fast the market grows each year, like Starbucks noticing coffee consumption grows 10% annually.",
          },
          {
            reference: "3-7",
            type: "text",
            label: () => "What is the name of the source for your TAM data?",
            key: "YOUR_SOURCE_NAME_OF_TAM_DATA",
            required: true,
            helperText:
              "Where you got the market info, like a coffee industry report or Nielsen survey.",
          },
          {
            reference: "3-8",
            type: "text",
            label: () => "What is the URL for the source of your TAM data?",
            key: "YOUR_SOURCE_INTERNET_ADDRESS_OF_TAM_DATA",
            required: true,
            helperText:
              "Provide the link to the source, like www.coffeeindustryreport.com/2025",
          },
          {
            reference: "3-9",
            type: "text",
            label: () =>
              "What is your projected market share (as a percentage) after five years of operation?",
            key: "YOUR_PERCENT_OF_THE_TAM_DO_YOU_WANT_TO_CAPTURE_IN_5_YEARS",
            required: false,
            helperText:
              "Estimate your share of the market, like Starbucks aiming for 5% of all coffee sales in the city in 5 years.",
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
            helperText:
              "Name the biggest competitor in your market, like Starbucks naming Dunkin' as their main competitor.",
          },
          {
            reference: "3-11",
            type: "text",
            label: () => "What is the name of your 2nd largest competitor?",
            key: "YOUR_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Name the second biggest competitor, like a local coffee chain competing with Starbucks.",
          },
          {
            reference: "3-12",
            type: "text",
            label: () => "What is the name of your 3rd largest competitor?",
            key: "YOUR_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText: "Name another competitor that influences your market.",
          },
          {
            reference: "3-13",
            type: "text",
            label: () => "What is the name of your 4th largest competitor?",
            key: "YOUR_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText: "Optional: List another competitor if relevant.",
          },
          {
            reference: "3-14",
            type: "text",
            label: () => "What is the name of your 5th largest competitor?",
            key: "YOUR_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText: "Optional: List a fifth competitor if it matters.",
          },
          {
            reference: "3-17",
            type: "textarea",
            label: () => "What are your planned sales channels and strategy?",
            key: "YOUR_HOW_ARE_YOU_PLANNING_ON_SELLING",
            required: true,
            helperText:
              "Explain how you will sell your product/service, like D2C online, retail partners, or events.",
          },
          {
            reference: "3-18",
            type: "textarea",
            label: () =>
              "Why are you (the founder/team) uniquely suited to lead this company to success? (Founder Rationale)",
            key: "YOUR_WHY_YOU",
            required: true,
            helperText:
              "Describe your team's unique experience, network, or skills that give you an advantage.",
          },
          {
            reference: "3-19",
            type: "textarea",
            label: () =>
              "If you have employees, list their most impressive and relevant skills that contribute to the business model's success.",
            key: "YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE",
            required: true,
            helperText:
              "Show what each employee brings, e.g., marketing expertise, engineering skills, or sales experience.",
          },
          {
            reference: "3-20",
            type: "textarea",
            label: () =>
              "If you have a Board or Advisors, what key skills do they possess that complement the management team?",
            key: "YOUR_SKILLS_THAT_YOUR_BOARD_HAS",
            required: false,
            helperText:
              "Optional: List advisory board or mentors' skills that strengthen the team.",
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
              "Choose how investors are expected to get a return, e.g., IPO, selling the company, or both.",
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
              "Describe your top achievement so far, like funding raised, product launch, or key partnership.",
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
            helperText:
              "Specify the total funding amount you are requesting (e.g., $2,500,000).",
          },
          {
            reference: "3-22",
            type: "textarea",
            label: () =>
              "What is the breakdown of how the requested funds will be used (Use of Proceeds)?",
            key: "YOUR_USE_OF_PROCEEDS",
            required: false,
            helperText:
              "Explain how you plan to allocate the funds, e.g., R&D, hiring, marketing, and working capital.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step3,
  },
  {
    stepNumber: 4,
    hasOutput: false,
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
              "Starbucks recruits employees through **multiple channels**: university job fairs, online career portals, and internal referrals. For baristas and store managers, Starbucks emphasizes cultural fit and customer service skills. Corporate roles are sourced via headhunters and professional networks to secure top talent in operations, marketing, and technology.",
          },
          {
            reference: "4-2",
            type: "textarea",
            label: () =>
              "How do you incentivize, motivate, and retain employees?",
            key: "YOUR_EMPLOYEE_RETENTION_STRATEGY",
            required: false,
            helperText:
              "Starbucks motivates and retains employees by offering **competitive pay, stock options (Bean Stock), and health benefits**. Employees receive training programs, career advancement opportunities, and recognition initiatives such as 'Partner of the Month'. Flexible scheduling and tuition reimbursement programs also contribute to high employee engagement and retention.",
          },
          {
            reference: "4-3",
            type: "textarea",
            label: () =>
              "Based on competitors' employee profiles, what skills do you want your employees to learn or possess?",
            key: "YOUR_COMPETITION_EMPLOYEE_SKILLS",
            required: false,
            helperText:
              "Starbucks values employees with strong **customer service, leadership, and operational skills**. Baristas are trained in beverage preparation and customer engagement, while managers gain expertise in inventory management, team leadership, and data-driven decision-making. Corporate staff are encouraged to develop cross-functional skills in marketing, finance, and digital technology to stay competitive.",
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
              "Howard Schultz's biggest strengths include his vision for creating a premium coffee experience, exceptional leadership skills, and ability to scale retail operations globally while maintaining brand consistency.",
          },
          {
            reference: "4-5",
            type: "textarea",
            label: () => "What are your biggest weaknesses?",
            key: "YOUR_MY_WEAKNESSES",
            required: true,
            helperText:
              "Howard Schultz's primary weakness early on was limited experience in large-scale retail operations beyond a single store. He mitigated this by learning from industry mentors and hiring experienced executives to complement his vision.",
          },
          {
            reference: "4-6",
            type: "text",
            label: () => "What is your job title?",
            key: "YOUR_MY_JOB_TITLE",
            required: true,
            helperText: "Founder & Former CEO",
          },
          {
            reference: "4-73",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting your strengths, past relevant work experience, education, awards, accomplishments, and job responsibilities.",
            key: "YOUR_MY_BIO",
            required: true,
            helperText:
              "Howard Schultz is the founder and former CEO of Starbucks, responsible for defining the company's global vision and leading its rapid expansion. He holds a BA in Communications from Northern Michigan University and previously worked at Hammarplast, a Swedish housewares company, before joining Starbucks in 1982. Schultz transformed Starbucks from a local Seattle coffee roaster into a global brand, emphasizing premium coffee experiences, employee benefits, and brand storytelling.",
          },
          {
            reference: "4-74",
            type: "text",
            label: () =>
              "If available, paste your LinkedIn profile picture URL here.",
            key: "YOUR_LINKEDIN_PHOTO",
            required: false,
            helperText:
              "Sample URL (not real for Schultz): https://upload.wikimedia.org/wikipedia/commons/5/56/Howard_Schultz_Starbucks.jpg",
          },
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
              "First Employee's strengths include deep expertise in retail operations, team management, and creating customer-centric store experiences.",
          },
          {
            reference: "4-8",
            type: "textarea",
            label: () => "What are the First Employee's biggest weaknesses?",
            key: "YOUR_FIRST_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "The first employee's weaknesses may include limited experience in corporate finance and large-scale supply chain management, which can be mitigated by mentorship from the founder.",
          },
          {
            reference: "4-9",
            type: "text",
            label: () => "What is the First Employee's job title?",
            key: "YOUR_FIRST_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Director of Retail Operations",
          },
          {
            reference: "4-76",
            type: "textarea",
            label: () =>
              "Write a short bio for the First Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FIRST_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Jane Doe joined Starbucks as the first hire outside the founder, responsible for establishing store operations, training programs, and customer service standards. She holds a BA in Business Management and previously managed multiple retail locations for a regional coffee chain, giving her hands-on experience in staff development, inventory management, and driving high-quality customer experiences.",
          },
          {
            reference: "4-77",
            type: "text",
            label: () =>
              "If available, paste the First Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FIRST_EMPLOYEES_LINKEDIN_PHOTO",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/1/1a/Starbucks_employee_example.jpg",
          },
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
              "The second employee excels in retail sales strategy, brand marketing, and customer engagement initiatives, with a proven record of increasing store revenue and customer loyalty.",
          },
          {
            reference: "4-11",
            type: "textarea",
            label: () => "What are the Second Employee's biggest weaknesses?",
            key: "YOUR_SECOND_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in large-scale corporate finance and supply chain planning, which will be supported by internal training and mentorship.",
          },
          {
            reference: "4-12",
            type: "text",
            label: () => "What is the Second Employee's job title?",
            key: "YOUR_SECOND_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Head of Retail Sales and Marketing",
          },
          {
            reference: "4-79",
            type: "textarea",
            label: () =>
              "Write a short bio for the Second Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SECOND_EMPLOYEES_BIO",
            required: false,
            helperText:
              "John Smith is the Head of Retail Sales and Marketing at Starbucks, responsible for driving store-level sales growth, implementing loyalty programs, and leading marketing campaigns. He has 12 years of experience in retail brand management and holds an MBA from the University of Pennsylvania, Wharton School. He previously managed regional sales operations for a national coffee chain, achieving consistent year-over-year growth.",
          },
          {
            reference: "4-80",
            type: "text",
            label: () =>
              "If available, paste the Second Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SECOND_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example2.jpg",
          },
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
              "The third employee has expertise in global brand marketing, digital campaign strategy, and customer engagement through loyalty programs, consistently driving measurable increases in foot traffic and sales.",
          },
          {
            reference: "4-14",
            type: "textarea",
            label: () => "What are the Third Employee's biggest weaknesses?",
            key: "YOUR_THIRD_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in managing supply chain or store operations, which will be supported by collaboration with operations managers.",
          },
          {
            reference: "4-15",
            type: "text",
            label: () => "What is the Third Employee's job title?",
            key: "YOUR_THIRD_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Head of Marketing and Customer Engagement",
          },
          {
            reference: "4-82",
            type: "textarea",
            label: () =>
              "Write a short bio for the Third Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_THIRD_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Alex Chen is the Head of Marketing and Customer Engagement at Starbucks, responsible for global brand campaigns, digital marketing, and loyalty program growth. Previously, Alex led the digital marketing team at a top beverage chain, achieving a 4x increase in rewards program participation. Alex holds a Bachelor's in Communications from the University of California, Berkeley.",
          },
          {
            reference: "4-83",
            type: "text",
            label: () =>
              "If available, paste the Third Employee's LinkedIn profile picture URL here.",
            key: "YOUR_THIRD_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example3.jpg",
          },
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
              "Exceptional analytical skills and deep expertise in corporate finance; highly proficient in GAAP and IFRS reporting, with strong experience in budgeting and forecasting for retail operations.",
          },
          {
            reference: "4-17",
            type: "textarea",
            label: () => "What are the Fourth Employee's biggest weaknesses?",
            key: "YOUR_FOURTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in startup or high-growth retail environments; primarily worked in large corporate settings.",
          },
          {
            reference: "4-18",
            type: "text",
            label: () => "What is the Fourth Employee's job title?",
            key: "YOUR_FOURTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Financial Controller – Starbucks U.S. Operations",
          },
          {
            reference: "4-85",
            type: "textarea",
            label: () =>
              "Write a short bio for the Fourth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FOURTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "David Brown is the Financial Controller for Starbucks U.S. Operations, responsible for financial reporting, budget tracking, and cash flow management. He spent 10 years at Deloitte as a senior auditor and holds an MBA in Finance from the University of Michigan.",
          },
          {
            reference: "4-86",
            type: "text",
            label: () =>
              "If available, paste the Fourth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FOURTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example4.jpg",
          },
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
              "Expertise in retail operations and customer experience design; strong skills in store layout optimization and loyalty program enhancements.",
          },
          {
            reference: "4-20",
            type: "textarea",
            label: () => "What are the Fifth Employee's biggest weaknesses?",
            key: "YOUR_FIFTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in corporate finance and large-scale supply chain logistics; mostly focused on customer-facing store operations.",
          },
          {
            reference: "4-21",
            type: "text",
            label: () => "What is the Fifth Employee's job title?",
            key: "YOUR_FIFTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Customer Experience Manager – Starbucks U.S. Stores",
          },
          {
            reference: "4-88",
            type: "textarea",
            label: () =>
              "Write a short bio for the Fifth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_FIFTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Emily White is the Customer Experience Manager for Starbucks U.S. Stores, responsible for optimizing in-store operations, loyalty program initiatives, and customer satisfaction metrics. She previously led customer experience improvements at a major retail chain and holds a BA in Hospitality Management.",
          },
          {
            reference: "4-89",
            type: "text",
            label: () =>
              "If available, paste the Fifth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_FIFTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example5.jpg",
          },
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
              "Strong expertise in Starbucks customer service standards, loyalty program management, and scalable onboarding processes for new store employees.",
          },
          {
            reference: "4-23",
            type: "textarea",
            label: () => "What are the Sixth Employee's biggest weaknesses?",
            key: "YOUR_SIXTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience with corporate finance systems; mostly focused on front-line customer success and operations.",
          },
          {
            reference: "4-24",
            type: "text",
            label: () => "What is the Sixth Employee's job title?",
            key: "YOUR_SIXTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText:
              "Customer Success & Loyalty Program Manager – Starbucks U.S. Stores",
          },
          {
            reference: "4-91",
            type: "textarea",
            label: () =>
              "Write a short bio for the Sixth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SIXTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Mark Green is the Customer Success & Loyalty Program Manager at Starbucks, responsible for onboarding new store employees, maintaining customer satisfaction, and managing the Starbucks Rewards loyalty program. He previously managed customer success for a regional coffee chain and holds a BA in Hospitality Management.",
          },
          {
            reference: "4-92",
            type: "text",
            label: () =>
              "If available, paste the Sixth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SIXTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example6.jpg",
          },
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
              "Specialized in compliance with food safety, health regulations, and corporate operational standards; highly detail-oriented and process-driven.",
          },
          {
            reference: "4-26",
            type: "textarea",
            label: () => "What are the Seventh Employee's biggest weaknesses?",
            key: "YOUR_SEVENTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in international franchise compliance, mostly focused on U.S. store operations.",
          },
          {
            reference: "4-27",
            type: "text",
            label: () => "What is the Seventh Employee's job title?",
            key: "YOUR_SEVENTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText:
              "Compliance & Regulatory Manager – Starbucks U.S. Stores",
          },
          {
            reference: "4-94",
            type: "textarea",
            label: () =>
              "Write a short bio for the Seventh Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_SEVENTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Nancy Hall is the Compliance & Regulatory Manager at Starbucks, responsible for ensuring all U.S. stores meet food safety, health, and operational compliance standards. She previously worked at the FDA and holds a Master's degree in Food Safety and Public Health.",
          },
          {
            reference: "4-95",
            type: "text",
            label: () =>
              "If available, paste the Seventh Employee's LinkedIn profile picture URL here.",
            key: "YOUR_SEVENTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example7.jpg",
          },
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
              "Skilled in digital solutions for retail operations, including POS system optimization and mobile app support.",
          },
          {
            reference: "4-29",
            type: "textarea",
            label: () => "What are the Eighth Employee's biggest weaknesses?",
            key: "YOUR_EIGHTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited experience in large-scale international mobile app rollout.",
          },
          {
            reference: "4-30",
            type: "text",
            label: () => "What is the Eighth Employee's job title?",
            key: "YOUR_EIGHTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Senior Digital Operations Manager",
          },
          {
            reference: "4-97",
            type: "textarea",
            label: () =>
              "Write a short bio for the Eighth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_EIGHTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Oliver King is the Senior Digital Operations Manager at Starbucks, responsible for POS system performance, app support, and in-store digital workflow optimization. He previously led mobile retail projects at Target and holds a BS in Information Systems.",
          },
          {
            reference: "4-98",
            type: "text",
            label: () =>
              "If available, paste the Eighth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_EIGHTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example8.jpg",
          },
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
              "Expertise in Starbucks store design and equipment optimization; strong project management skills for new store openings.",
          },
          {
            reference: "4-32",
            type: "textarea",
            label: () => "What are the Ninth Employee's biggest weaknesses?",
            key: "YOUR_NINTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Less experience in global supply chain integration for store equipment.",
          },
          {
            reference: "4-33",
            type: "text",
            label: () => "What is the Ninth Employee's job title?",
            key: "YOUR_NINTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Lead Store Design Engineer",
          },
          {
            reference: "4-100",
            type: "textarea",
            label: () =>
              "Write a short bio for the Ninth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_NINTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Patricia Quinn is the Lead Store Design Engineer at Starbucks, overseeing all store layouts, equipment selection, and prototyping for new store openings. She previously worked at Gensler and holds a degree in Industrial Design.",
          },
          {
            reference: "4-101",
            type: "text",
            label: () =>
              "If available, paste the Ninth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_NINTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example9.jpg",
          },
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
              "Proficient in business analytics, data-driven decision-making, and advanced Excel/SQL reporting for retail performance.",
          },
          {
            reference: "4-35",
            type: "textarea",
            label: () => "What are the Tenth Employee's biggest weaknesses?",
            key: "YOUR_TENTH_EMPLOYEES_WEAKNESSES",
            required: false,
            helperText:
              "Limited hands-on experience with international market expansion strategies.",
          },
          {
            reference: "4-36",
            type: "text",
            label: () => "What is the Tenth Employee's job title?",
            key: "YOUR_TENTH_EMPLOYEES_JOB_TITLE",
            required: false,
            helperText: "Retail Data & Business Analyst",
          },
          {
            reference: "4-103",
            type: "textarea",
            label: () =>
              "Write a short bio for the Tenth Employee, highlighting their strengths, experience, education, and job responsibilities.",
            key: "YOUR_TENTH_EMPLOYEES_BIO",
            required: false,
            helperText:
              "Robert Scott is the Retail Data & Business Analyst at Starbucks, responsible for analyzing store performance metrics, creating actionable reports for district managers, and supporting strategic decisions. He holds a Master's in Business Analytics and previously worked at McKinsey Retail Insights.",
          },
          {
            reference: "4-104",
            type: "text",
            label: () =>
              "If available, paste the Tenth Employee's LinkedIn profile picture URL here.",
            key: "YOUR_TENTH_EMPLOYEES_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "Sample URL (not real): https://upload.wikimedia.org/wikipedia/commons/2/2b/Starbucks_employee_example10.jpg",
          },
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
              "Significant gaps include international retail expansion strategy, advanced supply chain optimization for global Starbucks stores, and specialized corporate legal expertise for franchising agreements. We also need additional expertise in AI-driven customer behavior analytics and digital marketing at scale.",
          },
          {
            reference: "4-38",
            type: "textarea",
            label: () =>
              "Write down what skills you plan to outsource to external service providers.",
            key: "YOUR_SKILLS_TO_OUTSOURCE",
            required: false,
            helperText:
              "We plan to outsource specialized corporate legal counsel for franchising and IP matters, advanced digital marketing campaigns (SEO/SEM/social media), and IT infrastructure audits for Starbucks' mobile apps and POS systems.",
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
            helperText: "Smith & Associates",
          },
          {
            reference: "4-109",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #1 works for.",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Smith & Associates Legal LLP",
          },
          {
            reference: "4-110",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #1 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Corporate Legal Counsel",
          },
          {
            reference: "4-111",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #1's biggest strengths.",
            key: "YOUR_FIRST_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Smith & Associates is a boutique legal firm specializing in early-stage tech corporate structure and IP law, bringing 20 years of experience protecting high-growth startups.",
          },
          {
            reference: "4-112",
            type: "text",
            label: () => "Type in the name of outsourced partner #2.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "CFO Solutions Group",
          },
          {
            reference: "4-113",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #2 works for.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "CFO Solutions Group LLC",
          },
          {
            reference: "4-114",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #2 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Fractional CFO and Financial Modeler",
          },
          {
            reference: "4-115",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #2's biggest strengths.",
            key: "YOUR_SECOND_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "CFO Solutions Group provides experienced financial officers who specialize in generating complex 5-year financial models and optimizing cash flow for companies preparing for Series A funding.",
          },
          {
            reference: "4-116",
            type: "text",
            label: () => "Type in the name of outsourced partner #3.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "The HR Firm",
          },
          {
            reference: "4-117",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #3 works for.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "The HR Firm Co.",
          },
          {
            reference: "4-118",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #3 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "HR and Payroll Administrator",
          },
          {
            reference: "4-119",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #3's biggest strengths.",
            key: "YOUR_THIRD_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "The HR Firm manages all compliance, benefits, and payroll for small to medium-sized tech startups, ensuring legal adherence and efficient personnel management.",
          },
          {
            reference: "4-120",
            type: "text",
            label: () => "Type in the name of outsourced partner #4.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Creative Solutions Agency",
          },
          {
            reference: "4-121",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #4 works for.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Creative Solutions Agency LLC",
          },
          {
            reference: "4-122",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #4 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Marketing and Design Contractor",
          },
          {
            reference: "4-123",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #4's biggest strengths.",
            key: "YOUR_FOURTH_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Creative Solutions Agency provides on-demand graphic design, content creation, and campaign management, allowing our in-house team to focus on core product marketing.",
          },
          {
            reference: "4-124",
            type: "text",
            label: () => "Type in the name of outsourced partner #5.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_NAME",
            required: false,
            helperText: "Global Logistics Pros",
          },
          {
            reference: "4-125",
            type: "text",
            label: () =>
              "Type in the company name that outsourced partner #5 works for.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_COMPANY_NAME",
            required: false,
            helperText: "Global Logistics Pros Inc.",
          },
          {
            reference: "4-126",
            type: "text",
            label: () =>
              "Type in the title of outsourced partner #5 (i.e., Accounting Consultant or Corporate Lawyer, etc.).",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_JOB_TITLE",
            required: false,
            helperText: "Supply Chain Consultant",
          },
          {
            reference: "4-127",
            type: "textarea",
            label: () =>
              "Write a short bio highlighting outsourced partner #5's biggest strengths.",
            key: "YOUR_FIFTH_OUTSOURCED_PARTNERS_BIO",
            required: false,
            helperText:
              "Global Logistics Pros provides expert guidance on optimizing international shipping routes, managing customs, and reducing landed costs for hardware products, filling a critical gap in the CEO's experience.",
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
            helperText: "Supply Chain/Manufacturing",
          },
          {
            reference: "4-41",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #1 be from?",
            key: "YOUR_BOARD_ADVISOR_1_IDEAL_COMPANIES",
            required: false,
            helperText: "Tesla, Apple, Foxconn",
          },
          {
            reference: "4-42",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #1.",
            key: "YOUR_BOARD_ADVISOR_1_CANDIDATES",
            required: false,
            helperText:
              "Alan Tusk (ex-Apple VP), Sandra Lee (Foxconn Operations Lead)",
          },
          {
            reference: "4-43",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #1 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_1_MEETINGS_SET_UP",
            required: false,
            helperText: "Meeting set up with Alan Tusk on Tuesday.",
          },
          {
            reference: "4-44",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #1.",
            key: "YOUR_FIRST_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Alan Tusk",
          },
          {
            reference: "4-45",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #1 works for.",
            key: "YOUR_FIRST_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Global Manufacturing Inc.",
          },
          {
            reference: "4-46",
            type: "text",
            label: () =>
              "Type in the title of board advisor #1 (i.e., Vice President, Engineering).",
            key: "YOUR_FIRST_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Chief Logistics Officer (CLO)",
          },
          {
            reference: "4-48",
            type: "textarea",
            label: () => "What are board advisor #1's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_1_STRENGTHS",
            required: false,
            helperText:
              "Over 25 years in optimizing global supply chains and reducing manufacturing costs by up to 40%.",
          },
          {
            reference: "4-49",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #1's biggest strengths.",
            key: "YOUR_FIRST_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Alan Tusk, CLO of Global Manufacturing Inc., is a globally recognized expert in hardware scaling. He brings an unmatched track record in optimizing complex international supply chains and has successfully managed the production logistics for Fortune 500 companies, directly addressing our team's manufacturing weakness.",
          },
          {
            reference: "4-50",
            type: "text",
            label: () =>
              "If available, paste board advisors #1's LinkedIn profile picture URL here.",
            key: "YOUR_FIRST_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "http://googleusercontent.com/image_collection/image_retrieval/alan_tusk_profile.jpg",
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
            helperText: "Legal/IP Strategy",
          },
          {
            reference: "4-52",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #2 be from?",
            key: "YOUR_BOARD_ADVISOR_2_IDEAL_COMPANIES",
            required: false,
            helperText: "Wilson Sonsini Goodrich & Rosati, Cooley LLP",
          },
          {
            reference: "4-53",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #2.",
            key: "YOUR_BOARD_ADVISOR_2_CANDIDATES",
            required: false,
            helperText:
              "Lisa Kim (Venture Law Partner), Robert Davis (Patent Attorney)",
          },
          {
            reference: "4-54",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #2 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_2_MEETINGS_SET_UP",
            required: false,
            helperText: "Meeting set up with Lisa Kim next Friday.",
          },
          {
            reference: "4-55",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #2.",
            key: "YOUR_SECOND_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Lisa Kim",
          },
          {
            reference: "4-56",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #2 works for.",
            key: "YOUR_SECOND_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Venture Law Partners",
          },
          {
            reference: "4-57",
            type: "text",
            label: () =>
              "Type in the title of board advisor #2 (i.e., Vice President, Engineering).",
            key: "YOUR_SECOND_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Partner and Head of Patent Litigation",
          },
          {
            reference: "4-59",
            type: "textarea",
            label: () => "What are board advisor #2's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_2_STRENGTHS",
            required: false,
            helperText:
              "Deep expertise in technology patent defense and corporate compliance for venture-backed companies.",
          },
          {
            reference: "4-60",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #2's biggest strengths.",
            key: "YOUR_SECOND_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Lisa Kim, Partner at Venture Law Partners, is one of Silicon Valley's most respected legal minds in the tech sector. Her expertise is critical for guiding our intellectual property strategy and protecting our proprietary technology from competitive threats, a key gap identified in our initial team.",
          },
          {
            reference: "4-61",
            type: "text",
            label: () =>
              "If available, paste board advisors #2's LinkedIn profile picture URL here.",
            key: "YOUR_SECOND_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "http://googleusercontent.com/image_collection/image_retrieval/lisa_kim_profile.jpg",
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
            helperText: "Financial Modeling/Venture Capital",
          },
          {
            reference: "4-63",
            type: "textarea",
            label: () =>
              "What companies would be ideal to have board advisor #3 be from?",
            key: "YOUR_BOARD_ADVISOR_3_IDEAL_COMPANIES",
            required: false,
            helperText:
              "Sequoia Capital, Andreessen Horowitz (a16z), Kleiner Perkins",
          },
          {
            reference: "4-64",
            type: "textarea",
            label: () =>
              "Using LinkedIn, enter the names of a few great board candidates to fill board advisor seat number #3.",
            key: "YOUR_BOARD_ADVISOR_3_CANDIDATES",
            required: false,
            helperText:
              "Ben Thompson (Managing Partner), Jessica Chan (VP of Finance, ScaleUp Ventures)",
          },
          {
            reference: "4-65",
            type: "textarea",
            label: () =>
              "Send inMails to these board advisor seat #3 candidates and enter in which names you have meetings set up with.",
            key: "YOUR_BOARD_ADVISOR_3_MEETINGS_SET_UP",
            required: false,
            helperText: "Initial call scheduled with Ben Thompson.",
          },
          {
            reference: "4-66",
            type: "text",
            label: () => "Type in the name of confirmed board advisor #3.",
            key: "YOUR_THIRD_BOARD_ADVISORS_NAME",
            required: false,
            helperText: "Ben Thompson",
          },
          {
            reference: "4-67",
            type: "text",
            label: () =>
              "Type in the company name that confirmed board advisor #3 works for.",
            key: "YOUR_THIRD_BOARD_ADVISORS_COMPANY_NAME",
            required: false,
            helperText: "Capital Growth Fund",
          },
          {
            reference: "4-68",
            type: "text",
            label: () =>
              "Type in the job title of board advisor #3 (i.e., Vice President, Engineering).",
            key: "YOUR_THIRD_BOARD_ADVISORS_JOB_TITLE",
            required: false,
            helperText: "Managing Partner",
          },
          {
            reference: "4-70",
            type: "textarea",
            label: () => "What are board advisor #3's biggest strengths?",
            key: "YOUR_BOARD_ADVISOR_3_STRENGTHS",
            required: false,
            helperText:
              "Exceptional financial modeling, access to follow-on funding, and experience scaling companies from $1M to $100M ARR.",
          },
          {
            reference: "4-71",
            type: "textarea",
            label: () =>
              "Write a short one-paragraph bio highlighting board advisor #3's biggest strengths.",
            key: "YOUR_THIRD_BOARD_ADVISORS_BIO",
            required: false,
            helperText:
              "Ben Thompson, Managing Partner at Capital Growth Fund, brings over a decade of venture capital experience and has served on the boards of multiple successful unicorn companies. His strategic financial oversight and deep understanding of investor expectations will be invaluable for our future funding rounds.",
          },
          {
            reference: "4-72",
            type: "text",
            label: () =>
              "If available, paste board advisors #3's LinkedIn profile picture URL here.",
            key: "YOUR_THIRD_BOARD_ADVISOR_PROFILE_PICTURE_URL",
            required: false,
            helperText:
              "http://googleusercontent.com/image_collection/image_retrieval/ben_thompson_profile.jpg",
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
              "We will actively hire a dedicated Director of Manufacturing by Q2 to fill the skill gap identified in the CEO and Lead Mechanical Engineer's profiles.",
          },
          {
            reference: "4-107",
            type: "textarea",
            label: () =>
              "If you have not accounted for who is in charge of key job functions (Sales, Marketing, Accounting, Legal, etc.), write a note to address this (e.g., outsourced or skills to be learned).",
            key: "YOUR_UNACCOUNTED_JOB_FUNCTIONS_NOTE",
            required: false,
            helperText:
              "Accounting and Legal functions are being handled by Outsourced Partners (Smith & Associates and CFO Solutions Group), as documented in Section 4.14.",
          },
        ],
      },
    ],
    // outputs: OUTPUTS.step4,
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
              "Starbucks is a global coffeehouse chain offering high-quality, ethically sourced coffee and specialty beverages. Its value proposition is centered on providing a consistent, premium experience that combines product quality, store ambiance, and personalized service. Through innovations like the Starbucks mobile app and rewards program, customers can conveniently order ahead, earn loyalty points, and access exclusive seasonal beverages, enhancing both convenience and engagement.",
          },
          {
            reference: "5-2",
            type: "textarea",
            label: () =>
              "Is your business model scalable? If so, comment on how it is scalable. Is your product or service a platform, and if so, what else can run on your platform in the long run?",
            key: "YOUR_SCALABLE",
            required: false,
            helperText:
              "Yes, Starbucks' business model is highly scalable. New stores can be added globally with a standardized training and operational system, ensuring consistent quality. The platform also supports expansion into complementary offerings, such as Teavana teas, ready-to-drink beverages, and merchandise, while its mobile app ecosystem allows for future digital services like subscription-based coffee deliveries.",
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
              "Starbucks maintains strict quality control through sourcing ethically certified coffee beans, standardized roasting procedures, and barista training programs. Each store follows operational checklists and mystery shopper audits to ensure consistent beverage quality and customer experience across locations globally.",
          },
          {
            reference: "5-4",
            type: "textarea",
            label: () =>
              "If applicable, comment on the packaging of the product/service.",
            key: "YOUR_PACKAGING",
            required: false,
            helperText:
              "Starbucks uses branded, recyclable cups and packaging materials, often incorporating seasonal or limited-edition designs. Packaging reinforces the premium, ethical, and sustainable image of the brand while enhancing customer engagement through recognizable visual identity.",
          },
          {
            reference: "5-5",
            type: "textarea",
            label: () =>
              "If applicable, comment on the production of your product and how you plan on dealing with potential inventory issues.",
            key: "YOUR_PRODUCTION",
            required: false,
            helperText:
              "Coffee beans and other core ingredients are sourced from multiple certified suppliers worldwide to reduce risk of shortages. Starbucks uses predictive inventory management and point-of-sale data analytics to ensure sufficient stock at each store and prevent shortages during peak demand periods, such as holidays or promotional events.",
          },
          {
            reference: "5-12",
            type: "textarea",
            label: () =>
              "If you are producing your product, what are your thoughts on dealing with input price spikes (i.e., if commodity prices rise)?",
            key: "YOUR_INPUT_PRICES",
            required: false,
            helperText:
              "Starbucks mitigates input price volatility through long-term purchase agreements with coffee growers and futures contracts for key commodities. The company also adjusts pricing, optimizes supply chains, and diversifies sourcing regions to maintain consistent product availability and margins despite price fluctuations.",
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
              "Starbucks uses a **value-based, tiered pricing strategy** for its beverages. Standard drinks are priced to reflect perceived quality, while seasonal or premium drinks (e.g., Pumpkin Spice Latte) are slightly higher to reflect exclusivity. Charm pricing is applied in some markets (e.g., $4.95 instead of $5.00) to create a psychological sense of value.",
          },
          {
            reference: "5-7",
            type: "textarea",
            label: () =>
              "Discuss current or future cross-selling and upselling pricing details, if applicable.",
            key: "YOUR_FUTURE_PRICE_STRATEGY",
            required: false,
            helperText:
              "Upselling occurs through larger cup sizes ('tall' → 'venti') and add-ons like extra shots, syrups, or alternative milk, with small incremental pricing. Cross-selling includes pairing beverages with bakery items, breakfast sandwiches, or seasonal snacks, increasing average ticket value per customer visit.",
          },
          {
            reference: "5-8",
            type: "textarea",
            label: () =>
              "If applicable, comment on bundle product sales as a strategy, try-to-buy as a strategy, and other pricing strategies.",
            key: "YOUR_BUNDLE_PRICE_STRATEGY",
            required: false,
            helperText:
              "Starbucks offers **bundled promotions**, such as a coffee + pastry combo at a slightly discounted rate to increase basket size. Try-to-buy strategies appear in seasonal promotions or sampling events, allowing customers to try new drinks at a lower price, encouraging repeat purchases.",
          },
          {
            reference: "5-9",
            type: "textarea",
            label: () => "If applicable, comment on volume discounts.",
            key: "YOUR_VOLUME_DISCOUNTS",
            required: false,
            helperText:
              "For corporate or bulk orders, Starbucks provides **volume discounts** through its Office Coffee Solutions, where larger orders of coffee beans, beverages, or merchandise receive tiered pricing reductions.",
          },
          {
            reference: "5-10",
            type: "radio",
            label: () =>
              "Do you have a financing option when selling your products?",
            key: "YOUR_FINANCING",
            required: false,
            helperText:
              "Starbucks does not offer direct consumer financing, but certain Starbucks Rewards credit cards provide points and cash-back financing incentives for purchases, indirectly encouraging higher spending.",
          },
          {
            reference: "5-11",
            type: "radio",
            label: () =>
              "Do you offer a premium or freemium version of your product?",
            key: "YOUR_FREEMIUM_OR_PREMIUM_STRATEGY",
            required: false,
            helperText:
              "Starbucks offers a **premium product strategy**, including reserve coffees, seasonal beverages, and limited-edition drinks that are priced higher than standard offerings to reflect exclusivity and quality.",
            options: [
              { value: "freemium", label: "Freemium" },
              { value: "premium", label: "Premium (Paid Tiers)" },
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
              "Starbucks primarily sells directly to consumers through its **company-owned retail stores** worldwide. Additionally, beverages and packaged products are sold through **licensed stores, grocery retailers, and e-commerce channels**. The Starbucks sales team manages large corporate accounts and partnerships, while licensed stores follow brand standards to maintain consistent customer experience.",
          },
          {
            reference: "5-14",
            type: "textarea",
            label: () => "What is your return policy?",
            key: "YOUR_RETURN_POLICY",
            required: false,
            helperText:
              "Starbucks offers a **satisfaction guarantee** for beverages: if a customer is not satisfied, the drink is remade or replaced at no additional cost. Packaged goods sold in retail locations follow standard store return policies, generally allowing returns or exchanges within a set period if the product is defective or unopened.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step5,
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
              "Yes, we conducted a SurveyMonkey survey of 300 potential users, which validated our pricing model and feature set.",
          },
          {
            reference: "6-3",
            type: "textarea",
            label: () =>
              "Expand upon previous answers by writing a 3-sentence paragraph describing your ideal customer, including average age, location, language, income, and other demographic information.",
            key: "YOUR_WHO_IS_THE_CUSTOMER",
            required: true,
            helperText:
              "Our ideal customer is a Senior IT Manager (age 40–55) in the US Northeast, typically earning over $120,000 annually. They manage decentralized networks and prioritize security compliance above all else. This demographic is actively searching for unified cloud-based solutions to replace outdated on-premise hardware.",
          },
          {
            reference: "6-4",
            type: "textarea",
            label: () =>
              "Does 1 or more customer comprise more than 10% of your annual revenue? If so, explain this risk and how you will address it to decrease customer concentration in the future.",
            key: "YOUR_CUSTOMER_CONCENTRATION",
            required: true,
            helperText:
              "Our initial corporate client, 'Acme Corp,' currently accounts for 15% of projected Year 1 revenue, creating a concentration risk. We will mitigate this by pursuing 10–15 smaller accounts in Q3 and Q4 to reduce Acme's share to below 8% by Year 2.",
          },
          {
            reference: "6-5",
            type: "textarea",
            label: () =>
              "How do you plan on documenting and maintaining information about your customers (e.g., using a CRM or email marketing)?",
            key: "YOUR_CUSTOMER_PROFILE_DOCUMENTATION",
            required: false,
            helperText:
              "We use a HubSpot CRM integrated with our sales pipeline to track every customer touchpoint. Demographic data from sign-up forms is used to personalize email marketing campaigns (Mailchimp) for upselling opportunities.",
          },
          {
            reference: "6-6",
            type: "textarea",
            label: () =>
              "Document your strategy for attaining customers, avoiding specific sales or marketing strategies (which are covered in Step 9).",
            key: "YOUR_CUSTOMER_ATTAINMENT_STRATEGY",
            required: true,
            helperText:
              "Our customer attainment strategy centers on pilot programs with key industry partners and offering high-value gated content such as white papers and free tools. We will also build relationships with industry associations to gain credibility.",
          },
          {
            reference: "6-7",
            type: "radio",
            label: () =>
              "Are you following your customers and potential customers on social media accounts, like Twitter?",
            key: "YOUR_FOLLOWING_CUSTOMERS_ON_SOCIAL_MEDIA",
            required: false,
            helperText:
              "Yes, we track over 200 key decision-makers on LinkedIn and Twitter to monitor sentiment and identify buying signals.",
          },
          {
            reference: "6-8",
            type: "radio",
            label: () =>
              "Have you signed up for Google Alerts to receive immediate emails whenever your customers are in the news?",
            key: "YOUR_GOOGLE_ALERTS_FOR_CUSTOMERS",
            required: false,
            helperText:
              "Yes, we have Google Alerts set up for our top 10 target corporate clients and major competitors to stay updated and identify opportunities.",
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
              "We employ a 24/7 in-house support team accessible via live chat, phone, and email. All agents undergo mandatory weekly training focusing on product knowledge and emotional intelligence to ensure first-call resolution and exceptional support.",
          },
          {
            reference: "6-10",
            type: "text",
            label: () =>
              "How long does it take (or do you think it will take) for your company to respond to customer inquiries (i.e., 1 or 2 days)?",
            key: "YOUR_CUSTOMER_RESPONSE_TIME",
            required: false,
            helperText:
              "Our Service Level Agreement (SLA) guarantees a maximum response time of 4 hours for all non-critical issues and 15 minutes for critical system outages.",
          },
          {
            reference: "6-11",
            type: "radio",
            label: () =>
              "Do you have or plan to have a loyalty program like Starbucks cards?",
            key: "YOUR_CUSTOMER_LOYALTY_PROGRAM",
            required: false,
            helperText:
              "Yes, we are launching the Gold Member Program which offers recurring customers a 10% discount after their 10th purchase and access to exclusive early product betas.",
          },
          {
            reference: "6-12",
            type: "textarea",
            label: () =>
              "Do you offer product warranties? If so, comment on your warranty policy.",
            key: "YOUR_WARRANTY_POLICY",
            required: false,
            helperText:
              "We offer a standard 5-year limited hardware warranty that covers defects in materials and workmanship. This is longer than the 3-year standard offered by our two largest competitors, establishing trust with high-value clients.",
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
              "Google Trends data shows a 120% increase in searches for 'cold brew coffee' over the last year, indicating growing consumer interest in specialty coffee beverages, which aligns with Starbucks' expansion of cold drink offerings.",
          },
          {
            reference: "6-14",
            type: "textarea",
            label: () =>
              "Write a sentence about the size and growth of your industry's Total Addressable Market (T.A.M.), including the source name and source website if possible.",
            key: "YOUR_TAM_SENTENCE",
            required: true,
            helperText:
              "The Total Addressable Market for specialty coffee in the U.S. is currently valued at $47 billion and is projected to grow at 5% CAGR over the next five years, according to IBISWorld (www.ibisworld.com). Starbucks is positioned to capture a significant share with its strong brand recognition and retail footprint.",
          },
          {
            reference: "6-15",
            type: "radio",
            label: () =>
              "Have you looked into attending local Meetup.com events to network or learn more about your industry?",
            key: "YOUR_MEETUP_NETWORKING",
            required: false,
            helperText:
              "The Starbucks product development team regularly attends 'Specialty Coffee Association' Meetups and industry events to monitor trends, network with suppliers, and identify innovative beverage ideas.",
          },
          {
            reference: "6-16",
            type: "textarea",
            label: () =>
              "Comment on the percent of the T.A.M. that you would like to capture in 5 years.",
            key: "YOUR_PERCENT_OF_TAM_SENTENCE",
            required: false,
            helperText:
              "Starbucks aims to capture 10% of the premium coffee shop market in North America within 5 years by expanding its store footprint and launching targeted seasonal beverage campaigns.",
          },
          {
            reference: "6-17",
            type: "textarea",
            label: () =>
              "What are the trends or drivers (things that make the industry do well) in your industry? Comment on industry problems and how your company is the solution.",
            key: "YOUR_INDUSTRY_TRENDS_OR_DRIVERS",
            required: true,
            helperText:
              "Consumer preference is shifting toward ethically sourced, high-quality coffee. Many coffee shops struggle with consistent flavor across locations. Starbucks addresses this with standardized roasting processes, barista training programs, and global quality control systems.",
          },
          {
            reference: "6-18",
            type: "textarea",
            label: () =>
              "In one sentence, please explain the problem with the industry that your company is in.",
            key: "YOUR_INDUSTRY_PROBLEM",
            required: true,
            helperText:
              "The specialty coffee industry faces inconsistency in product quality and long wait times at peak hours, frustrating customers and reducing loyalty.",
          },
          {
            reference: "6-19",
            type: "textarea",
            label: () =>
              "In one sentence, please explain how your company addresses or fixes the industry problem (Industry Solution).",
            key: "YOUR_INDUSTRY_SOLUTION",
            required: true,
            helperText:
              "Starbucks ensures consistency and speed by using standardized brewing methods, digital ordering through the mobile app, and a well-trained barista workforce across all locations.",
          },
          {
            reference: "6-20",
            type: "textarea",
            label: () =>
              "Are there any risks that you wish to discuss with readers of your business plan? If so, comment on how your company can deal with these risks.",
            key: "YOUR_INDUSTRY_RISKS",
            required: true,
            helperText:
              "A primary risk is fluctuating coffee bean prices due to climate change. Starbucks mitigates this by diversifying sourcing regions, investing in sustainable farming, and maintaining forward contracts to stabilize costs.",
          },
          {
            reference: "6-21",
            type: "textarea",
            label: () =>
              "What is stopping other competitors from entering the market and competing with your company (Barriers to Entry)?",
            key: "YOUR_BARRIERS_TO_ENTRY",
            required: true,
            helperText:
              "Barriers include Starbucks' brand loyalty, prime real estate locations, patented beverage recipes, and economies of scale in supply chain and logistics that are hard for new entrants to replicate.",
          },
          {
            reference: "6-22",
            type: "textarea",
            label: () =>
              "If your business has an increase or decrease in revenue in certain months, please comment on the seasonal nature of your business.",
            key: "YOUR_SEASONALITY",
            required: false,
            helperText:
              "Starbucks experiences strong seasonality, with higher revenue in fall due to seasonal beverages like Pumpkin Spice Latte, requiring increased inventory and staffing during these months.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step6,
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
              "HTC's Vive (their higher-end VR product) costs $499* and is targeted at PC gamers. HTC was founded in 1997 in Taiwan and is a large, established multinational corporation with over $4 billion USD in annual revenue. The Vive runs on Valve's Steam platform. *Pricing source: https://www.amazon.com/HTC-VIVE-Virtual-Reality-System-pc/dp/B00VF5NT4I/",
          },
          {
            reference: "7-4",
            type: "textarea",
            label: () =>
              "Write a sentence about your largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Their primary strength is their established global brand recognition and deep integration with Valve's massive PC gaming distribution platform (Steam).",
          },
          {
            reference: "7-5",
            type: "textarea",
            label: () =>
              "Write a sentence about your largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "HTC's hardware has historically been priced higher than competitors and often suffers from lower resolution and a lack of focus on the B2B enterprise market.",
          },
          {
            reference: "7-6",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 2nd largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Oculus (owned by Facebook/Meta) focuses on an all-in-one standalone headset, currently priced at $299. Founded in 2012 and acquired by Facebook in 2014, their company size is massive due to Facebook's backing and headquarters are in Menlo Park, CA. They hold a dominant share of the consumer market.",
          },
          {
            reference: "7-7",
            type: "textarea",
            label: () =>
              "Write a sentence about your 2nd largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Their greatest strength is having the lowest consumer price point, massive marketing budgets, and a large, captive user base tied to the Facebook ecosystem.",
          },
          {
            reference: "7-8",
            type: "textarea",
            label: () =>
              "Write a sentence about your 2nd largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Their weakness is privacy concerns related to user data collection and limited high-end performance specifications for professional applications like film production.",
          },
          {
            reference: "7-9",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 3rd largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sony offers the PlayStation VR (PS VR), an accessory for the PlayStation console, priced around $350 (plus the console). Sony was founded in 1946 in Japan and is a major multinational electronics corporation. Their market share is largely confined to console owners.",
          },
          {
            reference: "7-10",
            type: "textarea",
            label: () =>
              "Write a sentence about your 3rd largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "Sony benefits from a huge installed base of PlayStation console users and exclusive, high-budget virtual reality game content.",
          },
          {
            reference: "7-11",
            type: "textarea",
            label: () =>
              "Write a sentence about your 3rd largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR",
            required: true,
            helperText:
              "The PS VR system is tied exclusively to their console platform and has lower technical specifications compared to PC-based solutions.",
          },
          {
            reference: "7-12",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 4th largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Microsoft has focused on the Windows Mixed Reality platform, with various third-party headsets ranging from $350-$500. Founded in 1975 in Redmond, WA, Microsoft is a technology behemoth that drives the software side of their platform.",
          },
          {
            reference: "7-13",
            type: "textarea",
            label: () =>
              "Write a sentence about your 4th largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Their core strength is deep integration with the massive Windows operating system and strong B2B enterprise partnerships.",
          },
          {
            reference: "7-14",
            type: "textarea",
            label: () =>
              "Write a sentence about your 4th largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "The platform suffers from fragmented hardware standards and a lack of dedicated, exclusive consumer content.",
          },
          {
            reference: "7-15",
            type: "textarea",
            label: () =>
              "Write a brief profile on your 5th largest competitor, including details like pricing, founding year, company size, and location. Please provide links to pricing data sources.",
            key: "YOUR_DESCRIPTION_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Nintendo has dabbled in VR with their Switch Labo kit, which costs $80 for the cardboard viewer. Founded in 1889 in Japan, they are a gaming giant primarily focused on family-friendly, accessible gaming and toy experiences.",
          },
          {
            reference: "7-16",
            type: "textarea",
            label: () =>
              "Write a sentence about your 5th largest competitor's strengths.",
            key: "YOUR_STRENGTHS_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "Nintendo's strength is its beloved intellectual property (IP) and its focus on creative, accessible experiences for a broad, family-oriented audience.",
          },
          {
            reference: "7-17",
            type: "textarea",
            label: () =>
              "Write a sentence about your 5th largest competitor's weaknesses.",
            key: "YOUR_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR",
            required: false,
            helperText:
              "The system is a low-fidelity, introductory experience that cannot compete in performance with high-end or professional VR systems.",
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
              "While competitors have established gaming platforms, our strength lies in our patented proprietary VR platform solution and exclusive content contract with Disney's Marvel Studios, which locks in high-value, unique entertainment content.",
          },
          {
            reference: "7-19",
            type: "textarea",
            label: () =>
              "Write a sentence about how your company's weaknesses compare to the competition's weaknesses.",
            key: "YOUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES",
            required: true,
            helperText:
              "Our main weakness is lack of brand recognition compared to giants like Sony and Facebook, but our competitors suffer from either high cost or platform fragmentation, issues we avoid with our low-cost, unified approach.",
          },
          {
            reference: "7-20",
            type: "textarea",
            label: () =>
              "Write a sentence about the quality of your company's management team relative to the competition's management team.",
            key: "YOUR_HOW_MANAGEMENT_COMPARED_TO_COMPETITIONS_MANAGEMENT",
            required: true,
            helperText:
              "While our competitors have large, institutional leadership, our small management team is composed of agile, industry veterans who have all previously launched successful hardware and software products in the virtual reality space, allowing for faster decision-making.",
          },
          {
            reference: "7-21",
            type: "textarea",
            label: () =>
              "Describe why your price is higher or lower than the competition.",
            key: "YOUR_PRICE_OF_YOUR_PRODUCT_OR_SERVICE_COMPARED_TO_THE_COMPETITION",
            required: true,
            helperText:
              "Our product is priced 20% lower than the nearest direct competitor (HTC Vive) because our patented manufacturing process allows us to be the lowest cost producer in the industry, enabling aggressive pricing to rapidly gain market share.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step7,
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
              "Example: Focus on selling directly through your own website, similar to how Starbucks pushes online orders through their app but still keeps partnerships like GrabFood for extra reach.",
          },
          {
            reference: "8-3",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service to retail, wholesale, or resellers?",
            key: "YOUR_OFFLINE_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Example: Work with selected retailers the same way Starbucks partners with grocery stores to sell bottled drinks—choose reliable partners and set clear sales commitments.",
          },
          {
            reference: "8-4",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service directly to your customers (no middle-man)?",
            key: "YOUR_DIRECT_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Example: Sell directly to customers through your own channels, like how Starbucks uses their stores and app to control the full experience and keep the whole margin.",
          },
          {
            reference: "8-5",
            type: "textarea",
            label: () =>
              "What is your strategy for selling your product or service indirectly to your customers (e.g., via a reseller)? Please highlight if you outsource any part of your distribution strategy.",
            key: "YOUR_INDIRECT_DISTRIBUTION_STRATEGY",
            required: true,
            helperText:
              "Example: Use resellers to reach areas you can't serve directly—similar to how Starbucks partners with licensed stores in airports. If you outsource logistics or fulfillment, mention it clearly.",
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
              "The primary cost of distribution is the **15% commission** paid to our channel partners (VARs). For D2C sales, the average shipping cost is $8.50 per unit, which is mostly subsidized by the customer.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step8,
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
              "Example: Our sales team is split into two groups—Store Partnerships handles large regional accounts similar to how Starbucks rolls out city clusters, while Local Outreach focuses on community-level clients using a neighborhood-based approach.",
          },
          {
            reference: "9-2",
            type: "textarea",
            label: () =>
              "How is your salesforce (if applicable) incentivized to sell your company's products or services (i.e., commission structure)? How do you motivate your employees?",
            key: "YOUR_SALES_FORCE_INCENTIVES",
            required: false,
            helperText:
              "Example: Reps earn a 50/50 base-plus-commission structure with bonuses for hitting quarterly targets—similar to how Starbucks rewards baristas with performance bonuses and store incentives to boost productivity.",
          },
          {
            reference: "9-3",
            type: "textarea",
            label: () =>
              "If applicable, mention if your employees are certified or licensed to sell the product (e.g., in the financial services industry, you often need certifications prior to selling products).",
            key: "YOUR_SALES_FORCE_REGISTRATION_OR_LICENSES",
            required: false,
            helperText:
              "Example: Team members maintain required industry certifications—similar to how Starbucks requires baristas to complete beverage mastery and safety training before handling customer orders.",
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
              "Example: Focus on platforms where your audience actually hangs out—similar to how Starbucks uses Instagram for visuals, TikTok for trends, and LinkedIn for corporate updates. Each channel should have its own purpose and content style.",
          },
          {
            reference: "9-7",
            type: "textarea",
            label: () =>
              "Comment on your email marketing campaign or lead generation campaign (meaning how to get customers from online sources).",
            key: "YOUR_LEAD_GENERATION_STRATEGY",
            required: true,
            helperText:
              "Example: Offer a useful freebie, collect emails, and nurture leads through automated sequences—like how Starbucks sends personalized offers through email to convert casual visitors into regular customers.",
          },
          {
            reference: "9-8",
            type: "textarea",
            label: () =>
              "If applicable, comment on your non-internet based marketing campaigns (e.g., radio, TV, newspapers, tradeshows, etc.).",
            key: "YOUR_OFFLINE_MEDIA_STRATEGY",
            required: true,
            helperText:
              "Example: Join key industry events or local community activities—similar to how Starbucks sponsors neighborhood events and sets up booths to stay visible and build trust offline.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step9,
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
              "Starbucks often sets revenue goals based on expanding store locations, introducing seasonal products, and increasing customer loyalty. For example: Year 1 focuses on stabilizing operations, Year 3 expands into new regions, Year 5 adds new product lines, and Year 10 grows internationally through strategic partnerships.",
          },
          {
            reference: "10-3",
            type: "textarea",
            label: () =>
              "If applicable, what are your units sold milestones in 1, 3, 5, and 10 years? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_UNIT_SALES_MILESTONES",
            required: false,
            helperText:
              "Starbucks tracks cup sales, packaged coffee, and merchandise. Milestones typically grow through opening more branches, forming retail partnerships, and launching new beverage categories. You can reflect a similar growth pattern in your unit-based goals.",
          },
          {
            reference: "10-4",
            type: "textarea",
            label: () =>
              "What percent of the Total Addressable Market (TAM) do you plan on capturing in 1, 3, 5, and 10 years? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_TAM_PERCENT_MILESTONES",
            required: false,
            helperText:
              "Starbucks began by focusing on a small share of the premium coffee market, then expanded gradually through city-by-city growth. Your TAM capture can follow the same logic: start small, build brand strength, and steadily expand your reach.",
          },
          {
            reference: "10-5",
            type: "text",
            label: () =>
              "Mention what year you plan on achieving break-even (reaching profitability).",
            key: "YOUR_FUTURE_BREAK_EVEN_MILESTONE",
            required: true,
            helperText:
              "New Starbucks stores aim to break even once daily cup sales consistently cover rent, labor, and operating costs. Your break-even timing can be based on when your revenue reliably covers your major expenses.",
          },
          {
            reference: "10-6",
            type: "textarea",
            label: () =>
              "If applicable, mention what margin milestones are (e.g., Gross Margin, Net Margin)?",
            key: "YOUR_FUTURE_PROFIT_MARGINS_MILESTONES",
            required: false,
            helperText:
              "Starbucks improves margins through efficiency—like batching drinks, negotiating ingredient sourcing, and automating parts of the workflow. Your margin milestones can reflect improvements you expect as your operations scale.",
          },
          {
            reference: "10-7",
            type: "textarea",
            label: () =>
              "What are your future products or services that you intend on releasing milestones? Feel free to explain how you intend to reach these product or service future milestones.",
            key: "YOUR_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES",
            required: true,
            helperText:
              "Starbucks releases new drinks each quarter, updates its food menu yearly, and rolls out digital features based on customer data. Your product milestones can follow a similar timeline—small releases early, larger innovations after gaining traction.",
          },
          {
            reference: "10-8",
            type: "textarea",
            label: () =>
              "What are your future geographic based milestones (i.e., opening an office in other regions or countries)? Feel free to explain how you intend to reach these milestones.",
            key: "YOUR_FUTURE_GEOGRAPHIC_MILESTONES",
            required: false,
            helperText:
              "Starbucks expands by first strengthening one region, then setting up regional hubs as demand increases. Your geographic milestones can mirror this: begin with your strongest market, then establish operations in new locations when revenue supports the move.",
          },
          {
            reference: "10-9",
            type: "textarea",
            label: () =>
              "Discuss any other future milestones not already accounted for in your previous answers.",
            key: "YOUR_FUTURE_OTHER_MILESTONES",
            required: false,
            helperText:
              "Starbucks pursues milestones like opening training centers, launching loyalty programs, or achieving sustainability certifications. You can list similar operational or brand-building achievements relevant to your business.",
          },
          {
            reference: "10-10",
            type: "textarea",
            label: () =>
              "If you plan on selling your company or doing an IPO (initial public offering) to put your company on the stock market, please mention it here.",
            key: "YOUR_FUTURE_EXIT_STRATEGY_MILESTONES",
            required: false,
            helperText:
              "Before Starbucks expanded globally, it prepared for public listing by proving profitability and strong store performance. Your exit strategy can follow this idea: ensure your financials and growth indicators are strong enough before considering a sale or IPO.",
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
              "Example: Reached ₱5M in annual revenue after launching Starbucks-style seasonal product bundles.",
          },
          {
            reference: "10-12",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant sales unit milestones you have already achieved.",
            key: "YOUR_PAST_UNIT_SALES_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Example: Sold 12,000 units of our flagship product within the first 90 days, similar to the momentum of a new Starbucks holiday drink launch.",
          },
          {
            reference: "10-13",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant TAM percent milestones you have already achieved.",
            key: "YOUR_PAST_TAM_PERCENT_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Example: Captured 3% of our local market—similar to early Starbucks expansion in a new city.",
          },
          {
            reference: "10-14",
            type: "text",
            label: () =>
              "If applicable, mention when you achieved break-even status (meaning revenue > expenses).",
            key: "YOUR_PAST_BREAK_EVEN_MILESTONE_ACHIEVED",
            required: false,
            helperText:
              "Example: Broke even in Month 14 after optimizing operations similar to Starbucks' store efficiency model.",
          },
          {
            reference: "10-15",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant profit margin milestones you have already achieved.",
            key: "YOUR_PAST_PROFIT_MARGINS_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Example: Maintained a 42% gross margin in Year 2 by adopting cost controls inspired by Starbucks' supply-chain discipline.",
          },
          {
            reference: "10-16",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant product or service milestones you have already achieved.",
            key: "YOUR_PAST_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Example: Launched our V2.0 service platform after a smooth rollout—similar to Starbucks launching a new digital app feature.",
          },
          {
            reference: "10-17",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant geographic based milestones you have already achieved.",
            key: "YOUR_PAST_GEOGRAPHIC_MILESTONES_ACHIEVED",
            required: false,
            helperText:
              "Example: Expanded operations to three major regions, mirroring Starbucks' phased geographic growth strategy.",
          },
          {
            reference: "10-18",
            type: "textarea",
            label: () =>
              "If applicable, mention which significant other milestones you have already achieved.",
            key: "YOUR_PAST_OTHER_MILESTONES",
            required: false,
            helperText:
              "Example: Completed key product certifications and hired our initial core team—similar to Starbucks building its foundational store operations team.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step10,
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
              "Risk: Mobile ordering and delivery apps from competitors could outpace Starbucks' in-store experience. Reaction: Starbucks continuously updates its mobile app and loyalty program, integrates AI for personalized offers, and invests in drive-thru and pick-up innovations to stay ahead of tech-driven convenience trends.",
          },
          {
            reference: "11-2",
            type: "textarea",
            label: () =>
              "What is the risk that future competitive threats might have on your business model? For example, if a large industry company competes with you, how would you react?",
            key: "YOUR_RISKS_FUTURE_COMPETITION_EMERGES",
            required: true,
            helperText:
              "Risk: Local coffee chains or new international brands could capture market share with lower prices. Reaction: Starbucks emphasizes brand loyalty, premium experience, and product innovation, while adjusting pricing strategies in competitive markets to maintain its share.",
          },
          {
            reference: "11-3",
            type: "textarea",
            label: () =>
              "What is the risk that future macroeconomic developments (e.g., recessions, interest rate spikes) might have on your business model, and how would you react?",
            key: "YOUR_RISKS_FUTURE_MACROECONOMIC_DEVELOPMENTS",
            required: true,
            helperText:
              "Risk: An economic downturn may reduce consumer discretionary spending on premium coffee. Reaction: Starbucks could emphasize value offerings, loyalty discounts, and expand affordable product lines while maintaining high-quality service to retain customers.",
          },
          {
            reference: "11-4",
            type: "textarea",
            label: () =>
              "What other risks or developments might occur that could impact your business model, and how would you react?",
            key: "YOUR_RISKS_FUTURE_OTHER_DEVELOPMENTS",
            required: true,
            helperText:
              "Risk: Rising concerns about sustainability and ethical sourcing could impact brand perception if supply chain practices are questioned. Reaction: Starbucks continues to invest in ethical sourcing, eco-friendly packaging, and transparency campaigns to maintain its reputation as a socially responsible company.",
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
              "Starbucks maintains centralized data systems for point-of-sale and inventory across all stores, backed up in multiple cloud regions. In case of system failures, stores can operate in offline mode, and data is synchronized automatically once systems are restored, ensuring minimal disruption to operations.",
          },
          {
            reference: "11-6",
            type: "textarea",
            label: () =>
              "What do you think is the most misunderstood aspect of your business model from your potential or current customers?",
            key: "YOUR_MOST_MISUNDERSTOOD_ASPECT_OF_YOUR_BUSINESS_PLAN",
            required: false,
            helperText:
              "Customers often assume Starbucks is just a coffee shop. In reality, Starbucks is a premium retail experience combining beverages, food, merchandise, and loyalty programs. Starbucks addresses this by highlighting the full range of offerings and digital engagement in marketing and store experience.",
          },
        ],
      },
    ],
    outputs: OUTPUTS.step11,
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
            reference: "13-7",
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
            reference: "13-8",
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
            reference: "13-9",
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
            reference: "13-10",
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
            reference: "13-11",
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
              "Yes, we have our three-page product data sheet ready for inclusion as an exhibit.",
          },
          {
            reference: "13-14",
            type: "radio",
            label: () =>
              "Do you want to include some financial statements in the Appendix instead of, or in addition to, Step 12?",
            key: "YOUR_FINANCIALS_IN_APPENDIX",
            required: true,
            helperText:
              "Yes, we want to include detailed monthly cash flow statements in the Appendix for investor review.",
          },
          {
            reference: "13-15",
            type: "textarea",
            label: () =>
              "Are there any other documents or exhibits you want to include in the Appendix that we have not discussed yet (e.g., patents, legal agreements)?",
            key: "YOUR_OTHER_DOCUMENTS_APPENDIX",
            required: true,
            helperText:
              "We will include copies of our two approved utility patents and the exclusive distribution agreement with the manufacturer.",
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
