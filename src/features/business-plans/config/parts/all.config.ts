import { part1 } from "./part1.config";
import { part2 } from "./part2.config";
import { part3 } from "./part3.config";
import { part4 } from "./part4.config";
import { part5 } from "./part5.config";
import { part6 } from "./part6.config";
import { part7 } from "./part7.config";
import { part8 } from "./part8.config";
import { part9 } from "./part9.config";
import { part10 } from "./part10.config";
import { part11 } from "./part11.config";
import { part12 } from "./part12.config";
import { part13 } from "./part13.config";
import { part14 } from "./part14.config";
import { part15 } from "./part15.config";
import { part16 } from "./part16.config";
import { part17 } from "./part17.config";
import { part18 } from "./part18.config";
import { part19 } from "./part19.config";
import { part20 } from "./part20.config";

export const FINANCIAL_PARTS = [
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
  part12,
  part13,
  part14,
  part15,
  part16,
  part17,
  part18,
  part19,
  part20,
];

export const getPartConfig = (part: number) => {
  return FINANCIAL_PARTS.find((p) => p.part === part);
};
