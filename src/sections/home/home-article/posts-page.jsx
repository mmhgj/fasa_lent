/* eslint-disable no-debugger */
import Grid from '@mui/material/Unstable_Grid2';

import { PostsItems } from './posts-items';

// ----------------------------------------------------------------------

export function PostListPage({ posts, loading }) {
  const renderList = (
    <Grid container spacing={3}>
      {posts.slice(0, 4).map((post) => (
        <Grid key={post.id} xs={12} sm={6} md={4} lg={3}>
          <PostsItems post={post} />
        </Grid>
      ))}
    </Grid>
  );

  return <div style={{ padding: '50px' }}>{renderList}</div>;
}
