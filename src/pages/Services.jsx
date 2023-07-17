import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

const Services = () => {
  return (
    <>
    <h1>
WE ARE EXPERT IN</h1>
   
    <div className="services">
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s01.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            ARCHITETURE
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s02.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
           CONSTRUCTION
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s03.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            EQUIPMENT
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s01.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            ARCHITETURE
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s01.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            ARCHITETURE
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          height: 220,
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <AspectRatio ratio="1" sx={{ width: 400 }}>
          <img
            style={{ objectFit: "cover" }}
            src="https://wasimmia.github.io/bildhub/img/icon/s01.png"
            srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent style={{ display: "flex", gap: "1rem" }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            ARCHITETURE
          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            <Link
              overlay
              underline="none"
              href="#interactive-card"
              sx={{ color: "text.tertiary" }}
            >
              Rorem ipsum dolor sit ameto dey teyeryconsecteadipisicing elit,
              sed do.
            </Link>
          </Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            readmore
          </Chip>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default Services;
