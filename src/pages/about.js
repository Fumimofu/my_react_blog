import React from 'react';
import { Link } from 'gatsby'; // gatsbyからLINK機能を引っ張ってきている。<Link to＝”/”>を使うため

import Layout from '../components/layout';
import SEO from '../components/seo';

const Aboutpage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <p>Welcome to About Page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Aboutpage; // そのclassがimportされるときにdefaultで呼ばれる

// defaultをつけなかったら、どのclassをimportするか指定する必要がある
// e.g.
//import {Comp1} from './comp/comp1';
