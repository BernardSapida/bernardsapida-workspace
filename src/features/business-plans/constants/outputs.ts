import type { Output } from "../types";

export const LEGAL_DISCLOSURES = (
  index: number,
  YOUR_COMPANY_NAME: string = "{1-YOUR_COMPANY_NAME}"
) =>
  [
    `This business plan contains confidential information created by ${YOUR_COMPANY_NAME}. This business plan may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
    `This business plan contains proprietary and confidential information created by ${YOUR_COMPANY_NAME}. This business plan is issued exclusively for informational purposes, and may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
    `This business plan contains proprietary and confidential information created by ${YOUR_COMPANY_NAME}. Please make sure to complete the Non Disclosure Agreement before reading the contents of this business plan. This business plan is issued exclusively for informational purposes, and may not be reproduced without the consent of ${YOUR_COMPANY_NAME}.`,
  ][index];

export const OUTPUTS = {
  step2: {
    YOUR_COMPANY_NAME: {
      title: () => "YOUR_COMPANY_NAME",
      type: "text",
      paragraph: (value: Record<string, any>) =>
        value.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}",
    } as Output,
    YOUR_PRODUCT_OR_SERVICE_DESCRIPTION: {
      title: () => "YOUR_PRODUCT_OR_SERVICE_DESCRIPTION",
      type: "text",
      paragraph: (value: Record<string, any>) =>
        value.YOUR_PRODUCT_OR_SERVICE_DESCRIPTION ||
        "{1-YOUR_PRODUCT_OR_SERVICE_DESCRIPTION}",
    } as Output,
    YOUR_COVER_PAGE_DATE: {
      title: () => "YOUR_COVER_PAGE_DATE",
      type: "text",
      paragraph: (value: Record<string, any>) =>
        value.YOUR_COVER_PAGE_DATE || "{2-YOUR_COVER_PAGE_DATE}",
    } as Output,
    YOUR_FIRST_NAME_AND_LAST_NAME: {
      title: () => "YOUR_FIRST_NAME_AND_LAST_NAME",
      type: "text",
      paragraph: (value: Record<string, any>) =>
        value.YOUR_FIRST_NAME_AND_LAST_NAME ||
        "{1-YOUR_FIRST_NAME_AND_LAST_NAME}",
    } as Output,
    YOUR_EMAIL_ADDRESS: {
      title: () => "YOUR_EMAIL_ADDRESS",
      type: "text",
      paragraph: (value: Record<string, any>) =>
        value.YOUR_EMAIL_ADDRESS || "{1-YOUR_EMAIL_ADDRESS}",
    } as Output,
    YOUR_PHONE_NUMBER: {
      title: () => "YOUR_PHONE_NUMBER",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        values.YOUR_PHONE_NUMBER || "{1-YOUR_PHONE_NUMBER}",
    } as Output,
    YOUR_INTERNET_ADDRESS: {
      title: () => "YOUR_INTERNET_ADDRESS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        values.YOUR_INTERNET_ADDRESS || "{1-YOUR_INTERNET_ADDRESS}",
    } as Output,
    YOUR_POST_ADDRESS: {
      title: () => "YOUR_POST_ADDRESS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        values.YOUR_POST_ADDRESS || "{1-YOUR_POST_ADDRESS}",
    } as Output,
    YOUR_COVER_PAGE_LEGAL_DISCLOSURE: {
      title: () => "YOUR_COVER_PAGE_LEGAL_DISCLOSURE",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        LEGAL_DISCLOSURES(
          values.YOUR_COVER_PAGE_LEGAL_DISCLOSURE,
          values.YOUR_COMPANY_NAME
        ) || "{2-YOUR_COVER_PAGE_LEGAL_DISCLOSURE}",
    } as Output,
  },
  step3: {
    FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW",
      type: "text",
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
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_TARGET_CUSTOMER: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_TARGET_CUSTOMER",
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
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_MANAGEMENT_TEAM: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_MANAGEMENT_TEAM",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FIRST_NAME_AND_LAST_NAME ||
          "{1-YOUR_FIRST_NAME_AND_LAST_NAME}"
        } founded ${values.YOUR_COMPANY_NAME || "{1-YOUR_COMPANY_NAME}"} in ${
          values.YOUR_YEAR_FOUNDED || "{1-YOUR_YEAR_FOUNDED}"
        }. ${
          values.YOUR_WHY_YOU || "{3-YOUR_WHY_YOU}"
        } relevant skills and experience that employees of the firm have include ${
          values.YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE ||
          "{3-YOUR_SKILLS_THAT_YOUR_EMPLOYEE_HAVE}"
        }.`,
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_BOARD_ADVISORS: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_BOARD_ADVISORS",
      type: "text",
      paragraph: ({ YOUR_SKILLS_THAT_YOUR_BOARD_HAS }: Record<string, any>) =>
        `The company's board includes ${
          YOUR_SKILLS_THAT_YOUR_BOARD_HAS ||
          "{3-YOUR_SKILLS_THAT_YOUR_BOARD_HAS}"
        }`,
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_MARKET_PROBLEM_AND_SOLUTION: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_MARKET_PROBLEM_AND_SOLUTION",
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
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_SIGNIFICANT_RECENT_COMPANY_MILESTONE: {
      title: () =>
        "FINAL_BP_EXECUTIVE_SUMMARY_SIGNIFICANT_RECENT_COMPANY_MILESTONE",
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
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_PRODUCT_IMAGE: {
      title: () => "FINAL_BP_EXECUTIVE_SUMMARY_PRODUCT_IMAGE",
      type: "image",
      url: (values: Record<string, any>) =>
        values.YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT ||
        "{3-YOUR_IMAGE_OF_THE_COMPANYS_PRODUCT}",
    } as Output,
    FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW_DATA_SOURCE_FOOTNOTE:
      {
        title: () =>
          "FINAL_BP_EXECUTIVE_SUMMARY_COMPANY_AND_MARKET_OVERVIEW_DATA_SOURCE_FOOTNOTE",
        type: "text",
        paragraph: ({
          YOUR_SOURCE_NAME_OF_TAM_DATA,
          YOUR_SOURCE_INTERNET_ADDRESS_OF_TAM_DATA,
        }: Record<string, any>) =>
          `Source: ${
            YOUR_SOURCE_NAME_OF_TAM_DATA || "{3-YOUR_SOURCE_NAME_OF_TAM_DATA}"
          }. Please see: ${
            YOUR_SOURCE_INTERNET_ADDRESS_OF_TAM_DATA ||
            "{3-YOUR_SOURCE_INTERNET_ADDRESS_OF_TAM_DATA}"
          }`,
      } as Output,
  },
  step4: {},
  step5: {
    FINAL_BP_PRODUCT_OR_SERVICE_OVERVIEW: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_OVERVIEW",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DETAILED_PRODUCT_OR_SERVICE_DESCRIPTION ||
          "{5-YOUR_DETAILED_PRODUCT_OR_SERVICE_DESCRIPTION}"
        }. ${values.YOUR_SCALABLE || "{5-YOUR_SCALABLE}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_QUALITY_CONTROL: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_QUALITY_CONTROL",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_QUALITY_CONTROL || "{5-YOUR_QUALITY_CONTROL}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_PACKAGING: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_PACKAGING",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_PACKAGING || "{5-YOUR_PACKAGING}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_PRODUCTION: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_PRODUCTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_PRODUCTION || "{5-YOUR_PRODUCTION}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_CURRENT_PRICE_STRATEGY: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_CURRENT_PRICE_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CURRENT_PRICE_STRATEGY ||
          "{5-YOUR_CURRENT_PRICE_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_FUTURE_PRICE_STRATEGY: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_FUTURE_PRICE_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_PRICE_STRATEGY || "{5-YOUR_FUTURE_PRICE_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_BUNDLE_PRICE_STRATEGY: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_BUNDLE_PRICE_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_BUNDLE_PRICE_STRATEGY || "{5-YOUR_BUNDLE_PRICE_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_VOLUME_DISCOUNTS: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_VOLUME_DISCOUNTS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_VOLUME_DISCOUNTS || "{5-YOUR_VOLUME_DISCOUNTS}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_FINANCING: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_FINANCING",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_FINANCING || "{5-YOUR_FINANCING}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_FREEMIUM_OR_PREMIUM_PRICING_STRATEGY: {
      title: () =>
        "FINAL_BP_PRODUCT_OR_SERVICE_FREEMIUM_OR_PREMIUM_PRICING_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FREEMIUM_OR_PREMIUM_STRATEGY ||
          "{5-YOUR_FREEMIUM_OR_PREMIUM_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_INPUT_PRICES: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_INPUT_PRICES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_INPUT_PRICES || "{5-YOUR_INPUT_PRICES}"}`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_DISTRIBUTION_STRATEGY: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_DISTRIBUTION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DISTRIBUTION_STRATEGY || "{5-YOUR_DISTRIBUTION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_PRODUCT_OR_SERVICE_RETURN_POLICY: {
      title: () => "FINAL_BP_PRODUCT_OR_SERVICE_RETURN_POLICY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_RETURN_POLICY || "{5-YOUR_RETURN_POLICY}"}`,
    } as Output,
  },
  step6: {
    FINAL_BP_CUSTOMER_AND_MARKET_WHO_IS_THE_CUSTOMER: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_WHO_IS_THE_CUSTOMER",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_WHO_IS_THE_CUSTOMER || "{6-YOUR_WHO_IS_THE_CUSTOMER}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_CONCENTRATION: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_CONCENTRATION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_CONCENTRATION ||
          "{6-YOUR_CUSTOMER_CONCENTRATION}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_ATTAINMENT_STRATEGY: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_ATTAINMENT_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_ATTAINMENT_STRATEGY ||
          "{6-YOUR_CUSTOMER_ATTAINMENT_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_SURVEY_RESEARCH: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_SURVEY_RESEARCH",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_SURVEY_RESEARCH ||
          "{6-YOUR_CUSTOMER_SURVEY_RESEARCH}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_SERVICE: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_SERVICE",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_CUSTOMER_SERVICE || "{6-YOUR_CUSTOMER_SERVICE}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_RESPONSE_TIME: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_RESPONSE_TIME",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_RESPONSE_TIME ||
          "{6-YOUR_CUSTOMER_RESPONSE_TIME}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_LOYALTY_PROGRAM: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_LOYALTY_PROGRAM",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_LOYALTY_PROGRAM ||
          "{6-YOUR_CUSTOMER_LOYALTY_PROGRAM}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_PROFILE_DOCUMENTATION: {
      title: () =>
        "FINAL_BP_CUSTOMER_AND_MARKET_CUSTOMER_PROFILE_DOCUMENTATION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_CUSTOMER_PROFILE_DOCUMENTATION ||
          "{6-YOUR_CUSTOMER_PROFILE_DOCUMENTATION}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_GENERAL_INDUSTRY_TRENDS_DRIVERS: {
      title: () =>
        "FINAL_BP_CUSTOMER_AND_MARKET_GENERAL_INDUSTRY_TRENDS_DRIVERS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_INDUSTRY_TRENDS_OR_DRIVERS ||
          "{6-YOUR_INDUSTRY_TRENDS_OR_DRIVERS}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_INDUSTRY_RISKS: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_INDUSTRY_RISKS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_INDUSTRY_RISKS || "{6-YOUR_INDUSTRY_RISKS}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_WARRANTY_POLICY: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_WARRANTY_POLICY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_WARRANTY_POLICY || "{6-YOUR_WARRANTY_POLICY}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_INDUSTRY_SEARCH_TRENDS: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_INDUSTRY_SEARCH_TRENDS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_INDUSTRY_SEARCH_TRENDS ||
          "{6-YOUR_INDUSTRY_SEARCH_TRENDS}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_BARRIERS_TO_ENTRY: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_BARRIERS_TO_ENTRY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_BARRIERS_TO_ENTRY || "{6-YOUR_BARRIERS_TO_ENTRY}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_TOTAL_ADDRESSABLE_MARKET: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_TOTAL_ADDRESSABLE_MARKET",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_TAM_SENTENCE || "{6-YOUR_TAM_SENTENCE}"}`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_PERCENT_TAM_WE_PLAN_ON_CAPTURING_IN_5_YEARS: {
      title: () =>
        "FINAL_BP_CUSTOMER_AND_MARKET_PERCENT_TAM_WE_PLAN_ON_CAPTURING_IN_5_YEARS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PERCENT_OF_TAM_SENTENCE ||
          "{6-YOUR_PERCENT_OF_TAM_SENTENCE}"
        }`,
    } as Output,
    FINAL_BP_CUSTOMER_AND_MARKET_SEASONALITY: {
      title: () => "FINAL_BP_CUSTOMER_AND_MARKET_SEASONALITY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${values.YOUR_SEASONALITY || "{6-YOUR_SEASONALITY}"}`,
    } as Output,
  },
  step7: {
    FINAL_BP_COMPETITION_LARGEST_COMPETITOR_DESCRIPTION: {
      title: () => "FINAL_BP_COMPETITION_LARGEST_COMPETITOR_DESCRIPTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DESCRIPTION_OF_LARGEST_COMPETITOR ||
          "{7-YOUR_DESCRIPTION_OF_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_STRENGTHS_OF_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_STRENGTHS_OF_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_STRENGTHS_OF_LARGEST_COMPETITOR ||
          "{7-YOUR_STRENGTHS_OF_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_WEAKNESSES_OF_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_WEAKNESSES_OF_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_WEAKNESSES_OF_LARGEST_COMPETITOR ||
          "{7-YOUR_WEAKNESSES_OF_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_2ND_LARGEST_COMPETITOR_DESCRIPTION: {
      title: () => "FINAL_BP_COMPETITION_2ND_LARGEST_COMPETITOR_DESCRIPTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DESCRIPTION_OF_2ND_LARGEST_COMPETITOR ||
          "{7-YOUR_DESCRIPTION_OF_2ND_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_STRENGTHS_OF_2ND_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_STRENGTHS_OF_2ND_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_STRENGTHS_OF_2ND_LARGEST_COMPETITOR ||
          "{7-YOUR_STRENGTHS_OF_2ND_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR ||
          "{7-YOUR_WEAKNESSES_OF_2ND_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_3RD_LARGEST_COMPETITOR_DESCRIPTION: {
      title: () => "FINAL_BP_COMPETITION_3RD_LARGEST_COMPETITOR_DESCRIPTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DESCRIPTION_OF_3RD_LARGEST_COMPETITOR ||
          "{7-YOUR_DESCRIPTION_OF_3RD_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_STRENGTHS_OF_3RD_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_STRENGTHS_OF_3RD_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_STRENGTHS_OF_3RD_LARGEST_COMPETITOR ||
          "{7-YOUR_STRENGTHS_OF_3RD_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR ||
          "{7-YOUR_WEAKNESSES_OF_3RD_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_4TH_LARGEST_COMPETITOR_DESCRIPTION: {
      title: () => "FINAL_BP_COMPETITION_4TH_LARGEST_COMPETITOR_DESCRIPTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DESCRIPTION_OF_4TH_LARGEST_COMPETITOR ||
          "{7-YOUR_DESCRIPTION_OF_4TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_STRENGTHS_OF_4TH_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_STRENGTHS_OF_4TH_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_STRENGTHS_OF_4TH_LARGEST_COMPETITOR ||
          "{7-YOUR_STRENGTHS_OF_4TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR ||
          "{7-YOUR_WEAKNESSES_OF_4TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_5TH_LARGEST_COMPETITOR_DESCRIPTION: {
      title: () => "FINAL_BP_COMPETITION_5TH_LARGEST_COMPETITOR_DESCRIPTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DESCRIPTION_OF_5TH_LARGEST_COMPETITOR ||
          "{7-YOUR_DESCRIPTION_OF_5TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_STRENGTHS_OF_5TH_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_STRENGTHS_OF_5TH_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_STRENGTHS_OF_5TH_LARGEST_COMPETITOR ||
          "{7-YOUR_STRENGTHS_OF_5TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR: {
      title: () => "FINAL_BP_COMPETITION_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR ||
          "{7-YOUR_WEAKNESSES_OF_5TH_LARGEST_COMPETITOR}"
        }`,
    } as Output,
    FINAL_BP_COMPETITION_DISCUSSION_OF_OUR_STRENGTHS_COMPARED_TO_THE_COMPETITIONS_STRENGTHS:
      {
        title: () => "YOUR_STRENGTHS_COMPARED_TO_THE_COMPETITIONS_STRENGTHS",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_STRENGTHS_COMPARED_TO_THE_COMPETITIONS_STRENGTHS ||
            "{7-YOUR_STRENGTHS_COMPARED_TO_THE_COMPETITIONS_STRENGTHS}"
          }`,
      } as Output,
    FINAL_BP_COMPETITION_DISCUSSION_OF_OUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES:
      {
        title: () => "YOUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES ||
            "{7-YOUR_WEAKNESSES_COMPARED_TO_THE_COMPETITIONS_WEAKNESSES}"
          }`,
      } as Output,
    FINAL_BP_COMPETITION_DISCUSSION_OF_OUR_MANAGEMENT_COMPARED_TO_THE_COMPETITIONS_MANAGEMENT:
      {
        title: () => "YOUR_HOW_MANAGEMENT_COMPARED_TO_COMPETITIONS_MANAGEMENT",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_HOW_MANAGEMENT_COMPARED_TO_COMPETITIONS_MANAGEMENT ||
            "{7-YOUR_HOW_MANAGEMENT_COMPARED_TO_COMPETITIONS_MANAGEMENT}"
          }`,
      } as Output,
    FINAL_BP_COMPETITION_DISCUSSION_OF_OUR_PRICE_STRATEGY_COMPARED_TO_THE_COMPETITIONS_PRICE_STRATEGY:
      {
        title: () =>
          "YOUR_PRICE_OF_YOUR_PRODUCT_OR_SERVICE_COMPARED_TO_THE_COMPETITION",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_PRICE_OF_YOUR_PRODUCT_OR_SERVICE_COMPARED_TO_THE_COMPETITION ||
            "{7-YOUR_PRICE_OF_YOUR_PRODUCT_OR_SERVICE_COMPARED_TO_THE_COMPETITION}"
          }`,
      } as Output,
  },
  step8: {
    FINAL_BP_GO_TO_MARKET_STRATEGY_ONLINE_DISTRIBUTION_STRATEGY: {
      title: () =>
        "FINAL_BP_GO_TO_MARKET_STRATEGY_ONLINE_DISTRIBUTION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_ONLINE_DISTRIBUTION_STRATEGY ||
          "{8-YOUR_ONLINE_DISTRIBUTION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_GO_TO_MARKET_STRATEGY_OFFLINE_DISTRIBUTION_STRATEGY: {
      title: () =>
        "FINAL_BP_GO_TO_MARKET_STRATEGY_OFFLINE_DISTRIBUTION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_OFFLINE_DISTRIBUTION_STRATEGY ||
          "{8-YOUR_OFFLINE_DISTRIBUTION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_GO_TO_MARKET_STRATEGY_DIRECT_DISTRIBUTION_STRATEGY: {
      title: () =>
        "FINAL_BP_GO_TO_MARKET_STRATEGY_DIRECT_DISTRIBUTION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_DIRECT_DISTRIBUTION_STRATEGY ||
          "{8-YOUR_DIRECT_DISTRIBUTION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_GO_TO_MARKET_STRATEGY_INDIRECT_DISTRIBUTION_STRATEGY: {
      title: () =>
        "FINAL_BP_GO_TO_MARKET_STRATEGY_INDIRECT_DISTRIBUTION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_INDIRECT_DISTRIBUTION_STRATEGY ||
          "{8-YOUR_INDIRECT_DISTRIBUTION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_GO_TO_MARKET_STRATEGY_COST_OF_DISTRIBUTION: {
      title: () => "FINAL_BP_GO_TO_MARKET_STRATEGY_COST_OF_DISTRIBUTION",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_COST_OF_DISTRIBUTION || "{8-YOUR_COST_OF_DISTRIBUTION}"
        }`,
    } as Output,
  },
  step9: {
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_STRUCTURE: {
      title: () =>
        "FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_STRUCTURE",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_SALES_FORCE_STRUCTURE || "{9-YOUR_SALES_FORCE_STRUCTURE}"
        }`,
    } as Output,
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_INCENTIVES: {
      title: () =>
        "FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_INCENTIVES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_SALES_FORCE_INCENTIVES ||
          "{9-YOUR_SALES_FORCE_INCENTIVES}"
        }`,
    } as Output,
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_REGISTRATION_OR_LICENSE_CERTIFICATION:
      {
        title: () =>
          "FINAL_BP_SALES_AND_MARKETING_STRATEGY_SALES_FORCE_REGISTRATION_OR_LICENSE_CERTIFICATION",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_SALES_FORCE_REGISTRATION_OR_LICENSES ||
            "{9-YOUR_SALES_FORCE_REGISTRATION_OR_LICENSES}"
          }`,
      } as Output,
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_ONLINE_MARKETING_SOCIAL_MEDIA_STRATEGY:
      {
        title: () =>
          "FINAL_BP_SALES_AND_MARKETING_STRATEGY_ONLINE_MARKETING_SOCIAL_MEDIA_STRATEGY",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_SOCIAL_MEDIA_STRATEGY ||
            "{9-YOUR_SOCIAL_MEDIA_STRATEGY}"
          }`,
      } as Output,
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_LEAD_GENERATION_STRATEGY: {
      title: () =>
        "FINAL_BP_SALES_AND_MARKETING_STRATEGY_LEAD_GENERATION_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_LEAD_GENERATION_STRATEGY ||
          "{9-YOUR_LEAD_GENERATION_STRATEGY}"
        }`,
    } as Output,
    FINAL_BP_SALES_AND_MARKETING_STRATEGY_OFFLINE_MEDIA_STRATEGY: {
      title: () =>
        "FINAL_BP_SALES_AND_MARKETING_STRATEGY_OFFLINE_MEDIA_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_OFFLINE_MEDIA_STRATEGY ||
          "{9-YOUR_OFFLINE_MEDIA_STRATEGY}"
        }`,
    } as Output,
  },
  step10: {
    FINAL_BP_MILESTONES_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES ||
          "{10-YOUR_FUTURE_PRODUCTS_OR_SERVICES_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_FUTURE_REVENUE_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_FUTURE_REVENUE_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_REVENUE_MILESTONES ||
          "{10-YOUR_FUTURE_REVENUE_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_FUTURE_BREAK_EVEN_MILESTONE: {
      title: () => "FINAL_BP_MILESTONES_FUTURE_BREAK_EVEN_MILESTONE",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_BREAK_EVEN_MILESTONE ||
          "{10-YOUR_FUTURE_BREAK_EVEN_MILESTONE}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_UNITS_SALES_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_UNITS_SALES_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_UNIT_SALES_MILESTONES ||
          "{10-YOUR_FUTURE_UNIT_SALES_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_TAM_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_TAM_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_TAM_PERCENT_MILESTONES ||
          "{10-YOUR_FUTURE_TAM_PERCENT_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_PROFIT_MARGINS_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_PROFIT_MARGINS_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_PROFIT_MARGINS_MILESTONES ||
          "{10-YOUR_FUTURE_PROFIT_MARGINS_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_GEOGRAPHIC_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_GEOGRAPHIC_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_GEOGRAPHIC_MILESTONES ||
          "{10-YOUR_FUTURE_GEOGRAPHIC_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_OTHER_FUTURE_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_OTHER_FUTURE_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_OTHER_MILESTONES ||
          "{10-YOUR_FUTURE_OTHER_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_FUTURE_EXIT_STRATEGY_MILESTONES: {
      title: () => "FINAL_BP_MILESTONES_FUTURE_EXIT_STRATEGY_MILESTONES",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_FUTURE_EXIT_STRATEGY_MILESTONES ||
          "{10-YOUR_FUTURE_EXIT_STRATEGY_MILESTONES}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_REVENUE_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_REVENUE_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_REVENUE_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_REVENUE_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_UNITS_SALES_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_UNITS_SALES_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_UNIT_SALES_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_UNIT_SALES_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_TAM_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_TAM_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_TAM_PERCENT_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_TAM_PERCENT_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_BREAK_EVEN_MILESTONE_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_BREAK_EVEN_MILESTONE_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_BREAK_EVEN_MILESTONE_ACHIEVED ||
          "{10-YOUR_PAST_BREAK_EVEN_MILESTONE_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_PROFIT_MARGINS_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_PROFIT_MARGINS_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_PROFIT_MARGINS_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_PROFIT_MARGINS_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED: {
      title: () =>
        "FINAL_BP_MILESTONES_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_PRODUCTS_OR_SERVICES_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_GEOGRAPHIC_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_GEOGRAPHIC_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_GEOGRAPHIC_MILESTONES_ACHIEVED ||
          "{10-YOUR_PAST_GEOGRAPHIC_MILESTONES_ACHIEVED}"
        }`,
    } as Output,
    FINAL_BP_MILESTONES_OTHER_MILESTONES_ACHIEVED: {
      title: () => "FINAL_BP_MILESTONES_OTHER_MILESTONES_ACHIEVED",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_PAST_OTHER_MILESTONES || "{10-YOUR_PAST_OTHER_MILESTONES}"
        }`,
    } as Output,
  },
  step11: {
    FINAL_BP_OTHER_MISCELLANEOUS_FUTURE_TECHNOLOGY_DEVELOPMENT_RISKS_THAT_CAN_IMPACT_OUR_BUSINESS_MODEL:
      {
        title: () =>
          "FINAL_BP_OTHER_MISCELLANEOUS_FUTURE_TECHNOLOGY_DEVELOPMENT_RISKS_THAT_CAN_IMPACT_OUR_BUSINESS_MODEL",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_RISKS_FUTURE_TECHNOLOGY_DEVELOPMENTS ||
            "{11-YOUR_RISKS_FUTURE_TECHNOLOGY_DEVELOPMENTS}"
          }`,
      } as Output,
    FINAL_BP_OTHER_MISCELLANEOUS_FUTURE_COMPETITION_RISKS: {
      title: () => "FINAL_BP_OTHER_MISCELLANEOUS_FUTURE_COMPETITION_RISKS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_RISKS_FUTURE_COMPETITION_EMERGES ||
          "{11-YOUR_RISKS_FUTURE_COMPETITION_EMERGES}"
        }`,
    } as Output,
    FINAL_BP_OTHER_MISCELLANEOUS_MACROECONOMIC_DEVELOPMENTS_RISKS: {
      title: () =>
        "FINAL_BP_OTHER_MISCELLANEOUS_MACROECONOMIC_DEVELOPMENTS_RISKS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_RISKS_FUTURE_MACROECONOMIC_DEVELOPMENTS ||
          "{11-YOUR_RISKS_FUTURE_MACROECONOMIC_DEVELOPMENTS}"
        }`,
    } as Output,
    FINAL_BP_OTHER_MISCELLANEOUS_DISASTER_RECOVERY_STRATEGY: {
      title: () => "FINAL_BP_OTHER_MISCELLANEOUS_DISASTER_RECOVERY_STRATEGY",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_RISKS_DISASTER_RECOVERY ||
          "{11-YOUR_RISKS_DISASTER_RECOVERY}"
        }`,
    } as Output,
    FINAL_BP_OTHER_MISCELLANEOUS_OTHER_POTENTIAL_RISKS: {
      title: () => "FINAL_BP_OTHER_MISCELLANEOUS_OTHER_POTENTIAL_RISKS",
      type: "text",
      paragraph: (values: Record<string, any>) =>
        `${
          values.YOUR_RISKS_FUTURE_OTHER_DEVELOPMENTS ||
          "{11-YOUR_RISKS_FUTURE_OTHER_DEVELOPMENTS}"
        }`,
    } as Output,
    FINAL_BP_OTHER_MISCELLANEOUS_WHAT_IS_THE_MOST_MISUNDERSTOOD_ASPECT_OF_OUR_BUSINESS_MODEL:
      {
        title: () =>
          "FINAL_BP_OTHER_MISCELLANEOUS_WHAT_IS_THE_MOST_MISUNDERSTOOD_ASPECT_OF_OUR_BUSINESS_MODEL",
        type: "text",
        paragraph: (values: Record<string, any>) =>
          `${
            values.YOUR_MOST_MISUNDERSTOOD_ASPECT_OF_YOUR_BUSINESS_PLAN ||
            "{11-YOUR_MOST_MISUNDERSTOOD_ASPECT_OF_YOUR_BUSINESS_PLAN}"
          }`,
      } as Output,
  },
};

export const FINANCE_BAR_12YEARS_KEYS_TO_RECORD: string[] = ["totalCogs"];
