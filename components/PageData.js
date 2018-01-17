import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Page = ({ width, height, children }) => (
  <ScrollView contentContainerStyle={{ width, height: height - 85 }}>
    {children}
  </ScrollView>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({
  isLight,
  image,
  title,
  subtitle,
  titleStyles,
  imageStyles,
  subtitleStyles,
  ...rest,
  pageComponent,
  pageComponentContainerStyle,
}) => {
  return (
    <Page {...rest}>
      <PageContent>
        <View style={imageStyles}>
          {image}
        </View>
        <Text style={titleStyles}>
          {title}
        </Text>
        <Text style={subtitleStyles}>
          {subtitle}
        </Text>
        <View style={pageComponentContainerStyle}>
          {pageComponent}
        </View>
      </PageContent>
    </Page>
  )
};

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
};

export default PageData;
