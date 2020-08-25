import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { useSelector, useDispatch } from "react-redux";
import { startReceiveCSVData } from "../store/middlewares";
import { Button } from "../components/common/Button";
import { cleanCSVDATA } from "../store/actions/crudActions";
export const CsvReport = () => {
  const { csvReport } = useSelector((state) => state.root);
  const { data, headers } = csvReport;
  const [downloadIsReady, setDownloadIsReady] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      setDownloadIsReady(false);
    } else {
      setDownloadIsReady(true);
    }
  }, [data]);

  const handleClick = () => {
    dispatch(startReceiveCSVData());
  };
  const handleFetch = () => {
    dispatch(cleanCSVDATA());
  };
  return (
    <>
      <Button onClick={handleClick} label="Generate Report" />
      {downloadIsReady && (
        <CSVLink
          onClick={handleFetch}
          filename={`${new Date()}_report.csv`}
          data={data}
          headers={headers}
        >
          Download Report
        </CSVLink>
      )}
    </>
  );
  // return
};

const headers = [
  { label: "Año académico", key: "year" },
  { label: "Identificación Alumno", key: "id_student" },
  { label: "Nombre alumno", key: "student_name" },
  { label: "Código Materia", key: "id_course" },
  { label: "Nombre Materia", key: "course_name" },
  { label: "Identifiación del profesor", key: "id_teacher" },
  { label: "Nombre del profesor", key: "teacher_name" },
  { label: "Califación final", key: "calification" },
  { label: "Aprobó", key: "isApproved" },
];
