import React from 'react';
import { Logo } from '../Logo';
import { Link } from '@reach/router';
import { MdHome, MdWork, MdLocalLibrary, MdLibraryBooks } from 'react-icons/md';
import {
  HOME_PATH,
  TEACHER_PATH,
  STUDENT_PATH,
  SUBJECT_PATH,
} from '../../utils/constants';

export const Sidebar = () => {
  return (
    <nav>
      <div>
        <Logo />
      </div>
      <div>
        <Link to={HOME_PATH}>
          <MdHome /> Home
        </Link>
        <Link to={TEACHER_PATH}>
          <MdWork /> Teachers
        </Link>
        <Link to={STUDENT_PATH}>
          <MdLocalLibrary />
          Students
        </Link>
        <Link to={SUBJECT_PATH}>
          <MdLibraryBooks />
          Subjects
        </Link>
      </div>
      <div>
        <button>GENERATE REPORT</button>
      </div>
    </nav>
  );
};
