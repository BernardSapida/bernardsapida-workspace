import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { IconText } from "./icons";
import type { Resume } from "~/features/resumes/constants";
import { renderDates } from "~/features/resumes/utils";

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  title: {
    fontSize: 12,
    color: "#7c3aed",
    fontWeight: 700,
  },
  area: { fontStyle: "italic", marginVertical: 4 },
});

type EducationProps = Resume["education"][0];

export const Education: React.FC<EducationProps> = ({
  institution,
  area,
  location,
  startDate,
  endDate,
}) => {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.title}>{institution}</Text>
      <Text style={styles.area}>{area}</Text>
      <View>
        <IconText icon="location" text={location} />
        <IconText icon="calendar" text={renderDates(startDate, endDate)} />
      </View>
    </View>
  );
};
