"use client";

import { useEffect, useRef } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

export default function GithubCalendar() {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, "theo-saly", {
        responsive: true,
      });
    }
  }, []);

  return (
    <div
      ref={calendarRef}
      className="calendar-wrapper"
    >
      Chargement des contributions…
    </div>
  );
}