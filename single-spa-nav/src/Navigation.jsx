import { useState, useEffect } from "react";
import { createStyles, Header, Container, Group, Title } from "@mantine/core";
import { navigateToUrl } from "single-spa";
import { UserButton } from "./UserButton";
import { useStore } from "./useStore";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const Link = (link) => {
  const { classes, cx } = useStyles();

  return (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: window.location.pathname === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        link.setActive(link.link);
        close();
        link.onClick(event);
      }}
    >
      {link.label}
    </a>
  );
};

export function Navigation() {
  const { isAuthenticated, signOut } = useStore();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("/");
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container size="lg" className={classes.header}>
        <Title
          component="a"
          href={isAuthenticated ? "/products" : "/"}
          onClick={(event) => {
            navigateToUrl(event);
            setActive("/");
          }}
          order={3}
        >
          SPA Products
        </Title>
        <Group spacing={5}>
          {isAuthenticated ? (
            <UserButton navigateToUrl={navigateToUrl} signOut={signOut} />
          ) : (
            <>
              <Link
                active={active}
                setActive={setActive}
                link="/auth"
                label="Sign In"
                onClick={navigateToUrl}
              />
              <Link
                active={active}
                setActive={setActive}
                link="/auth/signup"
                label="Sign Up"
                onClick={navigateToUrl}
              />
            </>
          )}
        </Group>
      </Container>
    </Header>
  );
}
