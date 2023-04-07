import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React, { FC, memo } from 'react';

type Props = {
  onOpen: () => void;
};
export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      position="absolute"
      right={5}
      top={3}
      display={{ base: 'flex', md: 'none' }}
      icon={<HamburgerIcon />}
      size="lg"
      variant="unstyled"
      onClick={onOpen}
    />
  );
});
