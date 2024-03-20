import React from 'react';
import MyMarkdown from './MyMarkdown';
import { formatDate } from '@/lib/utils';

type ContentProps = {
  date: string;
  description: string;
};

const MediaEntry: React.FC<ContentProps> = ({ date, description }) => (
  <div className="border-t py-4 md:flex">
    <div className="text-muted-foreground md:w-1/6 md:px-4 md:mt-0.5">
      {formatDate(date)}
    </div>
    <div className="md:w-5/6 md:pl-4">
      <MyMarkdown markdown={description} />
    </div>
  </div>
);

export default MediaEntry;
