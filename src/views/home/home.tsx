import { FC } from 'react'


import classNames from 'classnames'

import styles from './home.module.scss'
import { HomeProps } from './home.types'
import { Intro } from '@/components/intro'


const Home: FC<HomeProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <Intro />
    </main>
  )
}

export default Home
