import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface VerificationEmailProps {
  name: string;
  from: string;
  content: string
}

export default function VerificationEmail({ name, from, content }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Email from Website</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Section>
        <Row>
          <Heading as="h2">Email from Webiste</Heading>
        </Row>
        <Row>
          <Text>
            Name: {name}
          </Text>
        </Row>
        <Row>
          <Text>Their Email: {from}</Text> 
        </Row>
        <Row>
          <Text>Their Message: <br />
            {content}
          </Text>
        </Row>
      </Section>
    </Html>
  );
}