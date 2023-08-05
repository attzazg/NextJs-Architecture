import { ProfilePic_Component } from "@/utils/common/index";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      Footer @
      {ProfilePic_Component('next.svg', undefined, undefined, undefined)}
    </footer>
  );
}
