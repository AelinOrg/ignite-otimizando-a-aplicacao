import { VerticalNavbarItem } from "./VerticalNavbarItem";

export interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface SideBarProps {
  genres: Array<Genre>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  buttonClickCallback,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <VerticalNavbarItem 
            key={genre.id} 
            genre={genre} 
            isSelected={genre.id === selectedGenreId}
            onClick={() => buttonClickCallback(genre.id)}
          />
        ))}
      </div>
    </nav>
  )
}
