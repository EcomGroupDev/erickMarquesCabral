import { Body, Timeline as TimelineList } from "../styles";
import {
  TimelineCompany,
  TimelineHighlights,
  TimelineItem,
  TimelinePeriod,
  TimelineSkills,
  TimelineTitle,
} from "./TimelineParts";

export const Timeline = {
  Root: TimelineList,
  Item: TimelineItem,
  Period: TimelinePeriod,
  Body,
  Title: TimelineTitle,
  Company: TimelineCompany,
  Highlights: TimelineHighlights,
  Skills: TimelineSkills,
};
