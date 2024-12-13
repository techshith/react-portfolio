import React from "react";
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import pythonIcon from '@iconify/icons-logos/python';

export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl  p-4">
          <Icon icon="skill-icons:javascript" style={{ fontSize: '5rem' }} />
        </div>
        <div className="rounded-2xl  p-4">
          <Icon icon="skill-icons:react-dark" style={{ fontSize: '5rem' }} />
        </div>
        <div className="rounded-2xl  p-4">
          {/* Apply lightening filter to Node.js icon */}
          <Icon icon="skill-icons:nodejs-dark"style={{ fontSize: '5rem'}} />
        </div>
        <div className="rounded-2xl  p-4">
          {/* Apply lightening filter to Express icon */}
          <Icon icon="skill-icons:expressjs-dark" style={{ fontSize: '5rem'}} />
        </div>
        <div className="rounded-2xl  p-4">
          {/* Apply lightening filter to MongoDB icon */}
          <Icon icon="skill-icons:mongodb" style={{ fontSize: '5rem'}} />
        </div>
        <div className="rounded-2xl  p-4">
          <Icon icon='skill-icons:postgresql-dark' style={{ fontSize: '5rem' }} />
        </div>
        <div className="rounded-2xl  p-4">
          <Icon icon="skill-icons:python-dark" style={{ fontSize: '5rem' }} />
        </div>
        <div className="rounded-2xl  p-4">
          <Icon icon="skill-icons:postman" style={{ fontSize: '5rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
