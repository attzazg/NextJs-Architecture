import Image from "next/image";
import React from "react";
import { IProfilePic } from "../interfaces/about/index";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/London");


//Sting Print Function - Text Formating
// String_Display("Salman Khan is an actor")
// String_Display("Salman Khan is an actor", 'lowercase')
// String_Display("Salman Khan is an actor", 'capitalize')
// String_Display("Salman Khan is an actor", 'capitalizeOne')
// String_Display("Salman Khan is an actor", 'uppercase')
export function String_Display(inputString: String, format = "original") {
  const words = inputString.trim().split(/\s+/);
  if (format === "uppercase") {
    return inputString.toUpperCase();
  } else if (format === "lowercase") {
    return inputString.toLowerCase();
  } else if (format === "capitalize") {
    const pascalCase = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    return pascalCase;
  } else if (format === "capitalizeOne") {
    const sentences = inputString.trim().split(". ");
    const capitalizedSentences = sentences.map(
      (sentence) =>
        sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
    );
    return capitalizedSentences.join(". ");
  } else {
    return inputString;
  }
}

//Price Display function with currency - Decimal value
//Price_Display(50.801, 'USD', 2);
export function Price_Display(
  price: number,
  currency: string,
  decimalPlaces = 0
) {
  // Check if the price is a valid number
  if (isNaN(price)) {
    return "Invalid price";
  }
  const formattedPrice = price.toFixed(decimalPlaces);
  return `${currency} ${formattedPrice}`;
}

//Profile Pic Reuseable Function  - calls
//{ProfilePic_Component('next.svg', undefined, undefined, undefined)} //Call like it
export function ProfilePic_Display(
  src?: string,
  width?: number,
  height?: number,
  alt?: string
) {
  return (
    <div>
      <ProfilePic src={src} width={width} height={height} alt={alt} />
    </div>
  );
}
//Above Calling
function ProfilePic({ src, width, height, alt }: IProfilePic) {
  const resolvedSrc = src ? process.env.PUBLIC_URL + src : "vercel.svg";

  return (
    <Image
      src={resolvedSrc}
      width={width || 100}
      height={height || 100}
      alt={alt || "Profile Picture"}
    />
  );
}

//FromDate cannot be greater than the ToDate
// const fromDate = "2023-08-02 04:24:45.384";
// const toDate = "2023-08-03 10:30:00.000";
// CompareDates(fromDate, toDate);
export function CompareDates_Func(fromDate: string, toDate: string) {
  const from = dayjs(fromDate);
  const to = dayjs(toDate);
  if (from.isAfter(to)) {
    throw new Error("From date cannot be greater than the to date");
  }
}

//Date formate without timezone utc
// const inputDate = "2023-08-02 04:24:45.384 +0000";
// const inputFormat = "timeOnly";
// const standardizedTime = FormatedDate(inputDate, inputFormat);
export function FormatedDate_Func(inputDate: string, inputFormat: string) {
  const formats: any = {
    iso: "YYYY-MM-DDTHH:mm:ss.SSSZ",
    custom: "YYYY-MM-DD HH:mm:ss.SSS Z", // New format
    dateOnly: "YYYY-MM-DD", // Date-only format
    timeOnly: "HH:mm:ss.SSS", // Time-only format
    // Add more format mappings as needed
  };

  if (!formats[inputFormat]) {
    throw new Error("Unsupported input date format");
  }

  const parsedDate = dayjs.utc(inputDate, formats[inputFormat]);

  if (!parsedDate.isValid()) {
    throw new Error("Invalid input date");
  }

  return parsedDate.format(formats[inputFormat]);
}

//Dateformate with timezone UTC
// const inputDate = "2023-08-02 04:24:45.384 +0000";
// const inputFormat = "timeOnly";
// const standardizedTime = FormatDatewithTimezone(inputDate, inputFormat);
export function FormatDatewithTimezone_Func(inputDate: string, inputFormat: string) {
  const formats: any = {
    iso: "YYYY-MM-DDTHH:mm:ss.SSSZ",
    custom: "YYYY-MM-DD HH:mm:ss.SSS Z", // New format
    dateOnly: "YYYY-MM-DD", // Date-only format
    timeOnly: "HH:mm:ss.SSS", // Time-only format
    // Add more format mappings as needed
  };

  if (!formats[inputFormat]) {
    throw new Error("Unsupported input date format");
  }
  const parsedDate = dayjs(inputDate, formats[inputFormat]).tz();

  if (!parsedDate.isValid()) {
    throw new Error("Invalid input date");
  }

  return parsedDate.format(formats[inputFormat]);
}
