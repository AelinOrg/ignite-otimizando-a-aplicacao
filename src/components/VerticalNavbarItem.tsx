import { ButtonHTMLAttributes, memo } from "react";
import { Button } from "./Button";
import { Genre } from "./SideBar";

interface VerticalNavbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre: Genre;
  isSelected: boolean;
}

function VerticalNavbarItemComponent({ genre: {id, title,name  }, isSelected, ...rest}: VerticalNavbarItemProps) {
  return (
    <Button
      key={String(id)}
      title={title}
      iconName={name}
      selected={isSelected}
      {...rest}
    />
  )
}

export const VerticalNavbarItem = memo(VerticalNavbarItemComponent, (prev, next) => {
  return prev.isSelected === next.isSelected
})