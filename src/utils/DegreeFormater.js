export default function formaterDegree(jobDegree) {
  const degree = Object.entries(jobDegree)?.map(([name, value]) => ({
    name,
    value,
  }));

  const degreeFormated = degree.map((degree) => {
    if (degree.name === "professional_certification") {
      return {
        name: "Certificação Profissional",
        value: degree.value,
      };
    } else if (degree.name === "high_school") {
      return {
        name: "Ensino Médio",
        value: degree.value,
      };
    } else if (degree.name === "associates_degree") {
      return {
        name: "Técnico",
        value: degree.value,
      };
    } else if (degree.name === "bachelors_degree") {
      return {
        name: "Graduação",
        value: degree.value,
      };
    } else if (degree.name === "degree_mentioned") {
      return {
        name: "Graduação Mencionada",
        value: degree.value,
      };
    } else if (degree.name === "degree_preferred") {
      return {
        name: "Graduação Preferida",
        value: degree.value,
      };
    } else if (degree.name === "professional_certification_mentioned") {
      return {
        name: "Certificação Profissional",
        value: degree.value,
      };
    } else if (degree.name === "postgraduate_degree") {
      return {
        name: "Pós-Graduação",
        value: degree.value,
      };
    }
  });

  return degreeFormated;
}
