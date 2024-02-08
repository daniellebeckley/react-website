import { List, ListItem } from "@chakra-ui/react";

const YearList = () => {
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];
  return (
    <List>
      {years.map((year) => (
        <ListItem key={year} onClick={() => console.log(year)}>
          {year}
        </ListItem>
      ))}
    </List>
  );
};

export default YearList;
