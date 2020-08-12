import React from 'react';
import { Router } from '@reach/router';

import { Home } from '../pages/Home';
import {
  HOME_PATH,
  STUDENT_PATH,
  SUBJECT_PATH,
  TEACHER_PATH,
} from '../utils/constants';
import { Students } from '../pages/Student';
import { Teachers } from '../pages/Teacher';
import { Subjects } from '../pages/Subjects';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Home path={HOME_PATH} default />
        <Students path={STUDENT_PATH} />
        <Teachers path={TEACHER_PATH} />
        <Subjects path={SUBJECT_PATH} />
      </Router>
    </div>
  );
};
