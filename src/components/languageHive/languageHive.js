import React from 'react';
import { Hexagon, HexagonContent, HexagonIcon } from './hexagon'; // Create the Hexagon component separately

import JavaScriptIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/Star';
//import PythonIcon from '@mui/icons-material/Python';
import JavaIcon from '@mui/icons-material/LocalCafe';
import HTMLIcon from '@mui/icons-material/Code';
import CSSIcon from '@mui/icons-material/Style';
import CPlusPlusIcon from '@mui/icons-material/EmojiObjects';
import CIcon from '@mui/icons-material/DeveloperMode';
import MySQLIcon from '@mui/icons-material/Storage';

// TODO: find a different way to display icons
const languages = [
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  // { name: 'Python', icon: <PythonIcon /> },
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'HTML', icon: <HTMLIcon /> },
  { name: 'CSS', icon: <CSSIcon /> },
  { name: 'C++', icon: <CPlusPlusIcon /> },
  { name: 'C', icon: <CIcon /> },
  { name: 'mySQL', icon: <MySQLIcon /> },
];

function LanguageHive() {
  return (
    <div className="language-hive">
      {languages.map((language, index) => (
        <Hexagon key={index}>
          <HexagonContent>
            <HexagonIcon>{language.icon}</HexagonIcon>
          </HexagonContent>
        </Hexagon>
      ))}
    </div>
  );
}

export default LanguageHive;