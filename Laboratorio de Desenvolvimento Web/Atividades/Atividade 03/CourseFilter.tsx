/*Como complemento da Aula 06, ajustar o código CourseFilter.tsx para realizar a busca desses livros por disciplina e por semestre.*/

import { useBooks } from "../context/BooksContext";
import { MenuItem, Select, Typography, Box } from "@mui/material";
import { useState } from "react";

export default function CourseFilter() {
  const { books } = useBooks();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  // Gera listas únicas de disciplinas e semestres
  const courses = [...new Set(books.map((book) => book.course))];
  const semesters = [...new Set(books.map((book) => book.semester))].sort(
    (a, b) => a - b
  );

  // Filtra pelos dois critérios simultaneamente
  const filteredBooks = books.filter((b) => {
    const matchCourse = selectedCourse === "" || b.course === selectedCourse;
    const matchSemester =
      selectedSemester === "" || b.semester === Number(selectedSemester);
    return matchCourse && matchSemester;
  });

  return (
    <>
      <Typography variant="h5">Filtrar por Disciplina e Semestre</Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
        {/* Filtro por Disciplina */}
        <Box>
          <Typography variant="subtitle2">Disciplina</Typography>
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            sx={{ minWidth: 250 }}
          >
            <MenuItem value="">Todas</MenuItem>
            {courses.map((course) => (
              <MenuItem key={course} value={course}>
                {course}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Filtro por Semestre */}
        <Box>
          <Typography variant="subtitle2">Semestre</Typography>
          <Select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">Todos</MenuItem>
            {semesters.map((semester) => (
              <MenuItem key={semester} value={String(semester)}>
                {semester}º Semestre
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      {/* Lista de livros filtrados */}
      {filteredBooks.length === 0 ? (
        <Typography color="text.secondary">
          Nenhum livro encontrado para os filtros selecionados.
        </Typography>
      ) : (
        filteredBooks.map((book, idx) => (
          <Typography key={idx} sx={{ mb: 1 }}>
            <strong>{book.title}</strong> — {book.author} - {book.publisher} (
            {book.year}) | Disciplina: {book.course} | {book.semester}º
            Semestre
          </Typography>
        ))
      )}
    </>
  );
}