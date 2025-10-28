import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface contactUsEmailProps {
  name: string
  from: string,
  content: string
}

export default function ContactUsEmail({name, from, content}: contactUsEmailProps){
  return(
    <Html>
        <Head>
        <title>Contact Us Email from Website</title>
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
            <Heading as="h2">Contact Email from Cestoball Website</Heading>
        </Row>
        <Row>
            <Heading as="h3">
                Email from: {name}
            </Heading>
        </Row>
        <Row>
            <Heading as="h3">
                Their Email Id: {from}
            </Heading>
        </Row>
        <Row>
            {content}
        </Row>
      </Section>
    </Html>
  )
    
}