import {
  IconChevronRight,
  IconSettings,
  IconPhoto,
  IconArrowsLeftRight,
} from "@tabler/icons";
import { Group, Avatar, Text, Menu, UnstyledButton } from "@mantine/core";

export function UserButton({ navigateToUrl, signOut }) {
  const image =
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80";
  const name = "Harriette Spoon";
  return (
    <Group position="center">
      <Menu withArrow width={200}>
        <Menu.Target>
          <UnstyledButton
            sx={(theme) => ({
              display: "block",
              width: "100%",
              padding: theme.spacing.xs,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Group>
              <Avatar src={image} radius="xl" />

              <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {name}
                </Text>
              </div>
              {<IconChevronRight size={16} />}
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

          <Menu.Divider />

          <Menu.Item
            icon={<IconArrowsLeftRight size={14} />}
            component="a"
            href="/"
            onClick={(event) => {
              signOut();
              navigateToUrl(event);
            }}
          >
            Sign Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
