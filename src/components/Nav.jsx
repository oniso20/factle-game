import React from "react";
import { useState } from "react";
import "../styles/styles.css";
import HelpModal from "./HelpModal";
import StatsModal from "./StatsModal";
import SettingsModal from "./SettingsModal";

const Nav = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Close
  const closeHelp = () => {
    setShowHelpModal(false);
  };
  const closeStats = () => {
    setShowStatsModal(false);
  };
  const closeSettings = () => {
    setShowSettingsModal(false);
  };
  // Open
  const openHelp = () => {
    setShowHelpModal(true);
  };
  const openStats = () => {
    setShowStatsModal(true);
  };
  const openSettings = () => {
    setShowSettingsModal(true);
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">
              <span onClick={openHelp} className="material-symbols-outlined">
                help_center
              </span>
            </a>
          </li>
          <li>
            <a href="#">FactChecker</a>
          </li>
          <li>
            <a href="#">
              <span onClick={openStats} className="material-symbols-outlined">
                analytics
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span
                onClick={openSettings}
                className="material-symbols-outlined"
              >
                settings
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {showHelpModal && <HelpModal closeHelp={closeHelp} />}
      {showStatsModal && <StatsModal closeStats={closeStats} />}
      {showSettingsModal && <SettingsModal closeSettings={closeSettings} />}
    </>
  );
};

export default Nav;
