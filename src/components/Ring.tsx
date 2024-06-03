import { Icon } from "@iconify/react";

import "../styles/Ring.scss";

interface Props {
  mainIcon: string;
  subIcons: string[];
  duration?: number;
}

export function Ring({ mainIcon, subIcons, duration }: Props) {
  const subIconElements = subIcons.map((icon, index) => {
    if (duration == null) {
      duration = 3000;
    }
  
    const unit = duration / subIcons.length;

    return (
      <Icon
        style={{ animationDuration: `${duration}ms`, animationDelay: `${(index + 1) * unit}ms` }}
        className="sub-icon"
        icon={icon}
      />
    );
  });

  return (
    <article className="ring-system">
      <Icon className="main-icon" icon={mainIcon} />
      {subIconElements}
    </article>
  );
}
