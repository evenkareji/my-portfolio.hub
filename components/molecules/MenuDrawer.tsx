import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, memo } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};
export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Link href="/">
              <Button w="100%" onClick={onClose}>
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button w="100%" onClick={onClose}>
                About
              </Button>
            </Link>
            <Link href="/blog">
              <Button w="100%" onClick={onClose}>
                Blog
              </Button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
