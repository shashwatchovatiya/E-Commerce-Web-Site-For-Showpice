// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (

    <div className="flex justify-center">

    <Stack spacing={2}>
      {/* <Pagination count={10} shape="rounded" /> */}
      <Pagination count={10} variant="outlined" shape="rounded" defaultPage={2} className='py-36 mx-auto' />
    </Stack>
    </div>
  );
}