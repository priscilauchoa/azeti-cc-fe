import React from 'react';
import './Cover.css';

interface Props {
	url: string;
}

export default function Cover(props: Props) {
	return <div className="cover" style={{ backgroundImage: `url(${props.url})` }} />;
}