type Props = {};

export const Header = ({}: Props) => {
  return <div></div>;
};

// const Header = ({ active = 'Discover' }) => (
//   <div className="rhd">
//     <div className="rhd-brand">reel</div>
//     <nav className="rhd-nav">
//       {['Discover', 'Films', 'People', 'Watchlist'].map((n) => (
//         <a key={n} href="#" aria-current={n === active ? 'page' : undefined}>
//           {n}
//         </a>
//       ))}
//     </nav>
//     <div className="rhd-search">
//       <SearchInput placeholder="Search films, people, collections…" />
//     </div>
//     <div className="rhd-right">
//       <IconButton icon="sparkle" label="What's new" size="md" />
//       <IconButton icon="user" label="Account" size="md" variant="solid" shape="circle" />
//     </div>
//   </div>
// );
