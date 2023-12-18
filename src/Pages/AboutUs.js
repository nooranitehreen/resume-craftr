import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import aboutus from "./aboutus.png";
import aboutline from "./aboutline.png";

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Craftr</h2>
        <span><img style={{ width: "200px", height: "50px" }} src={aboutline} alt="aboutline" /></span>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
            "Welcome to my professional services hub! As a dedicated professional passionate about delivering exceptional value, I'm here to assist individuals in crafting standout resumes and cover letters. With years of hands-on experience and a commitment to your success, my mission is to empower you in securing your dream opportunity. 
            Job searches can be daunting, and that's why I'm dedicated to guiding you through this journey. 
            My platform offers a range of personalized templates and industry-relevant keywords, ensuring your resume reflects your unique skills and achievements. I'm committed to providing a high-quality, cost-effective solution tailored to your career needs. 
            Keeping abreast of industry trends and best practices, I assure you that your career aspirations are in capable hands. 
            Thank you for considering my services—I'm excited to be part of your career growth and success!"
          </Typography>
          <Stack>
            <img className="about-img"
              src={aboutus}
              alt="img"
              style={{height: "400px", width: "400px"}}
            />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="dark"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
