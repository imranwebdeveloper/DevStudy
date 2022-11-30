import React from "react";
import { Page, Text, Document, StyleSheet, Image } from "@react-pdf/renderer";

function PDFFile({ data }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    body: {
      paddingTop: 35,
      paddingBottom: 35,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
    },
    image: {
      marginVertical: 35,
      marginHorizontal: 35,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>{data.courseName}</Text>
        <Image style={styles.image} src={data.thumbnail} />
        <Text style={styles.text}>{data.description}</Text>
        <Text style={styles.title}>Outline</Text>
        {data.outline.map((item, id) => (
          <Text key={id} style={styles.text}>
            {item}
          </Text>
        ))}
      </Page>
    </Document>
  );
}

export default PDFFile;
