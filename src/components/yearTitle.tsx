import { createStyles, rem } from "@mantine/core";
import { useAtom } from "jotai";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { countYearAtom } from "../../atoms";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import Alldata from "../../contents/alldata";
import useTimeline from "../hooks/useTimeline";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { scrollToThePlace } from "./scrollControl";
import classes from "../styles/yearTitle.module.css";

interface YearTitleProps {
  kindOfTitle: "upTitle" | "downTitle";
}

const SCROLL_TO_A_LOCAL_PAGE = 400;
const FIRST_TIMELINE_YEAR = 0;
const LAST_TIMELINE_YEAR = 5;
const MORE_ONE_MONTH = 1;

export default function YearTitle({ kindOfTitle }: YearTitleProps) {
  const [count, setCountYear] = useAtom(countYearAtom);
  const { allYears } = Alldata();
  const currentYear = useTimeline(allYears);

  const { t: translate } = useTranslation("common");
  const firstYear = isDisable(FIRST_TIMELINE_YEAR);
  const lastYear = isDisable(LAST_TIMELINE_YEAR);

  function isDisable(firstYearOrLastYear: number) {
    const disable = count === firstYearOrLastYear;
    return disable;
  }
  function nextTimeline() {
    setCountYear((countYear) => countYear + 1);
    scrollToThePlace(SCROLL_TO_A_LOCAL_PAGE);
  }
  function previousTimeline() {
    setCountYear((countYear) => countYear - 1);
    scrollToThePlace(SCROLL_TO_A_LOCAL_PAGE);
  }

  return (
    <>
      {kindOfTitle === "upTitle" ? (
        <div className={classes.upYear}>
          <ArrowLeftIcon
            className={`${classes.upIcon} ${firstYear && classes.disableIcon}`}
            onClick={previousTimeline}
          />
          <h1>{currentYear}</h1>
          <ArrowRightIcon
            className={`${classes.upIcon} ${lastYear && classes.disableIcon}`}
            onClick={nextTimeline}
          />
        </div>
      ) : (
        <div className={classes.downYear}>
          <div
            className={`${classes.flexIcon} ${
              firstYear && classes.disableIcon
            }`}
            onClick={previousTimeline}
          >
            <HiOutlineArrowNarrowLeft size="1rem" /> {translate("previous")}
          </div>

          <div
            className={`${classes.flexIcon} ${lastYear && classes.disableIcon}`}
            onClick={nextTimeline}
          >
            {translate("next")}
            <HiOutlineArrowNarrowRight size="1rem" />
          </div>
        </div>
      )}
    </>
  );
}
