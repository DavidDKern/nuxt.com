const badge = {
  variant: {
    primary: 'u-bg-gray-800 u-text-white',
    secondary: 'u-bg-white u-text-gray-700'
  }
}

const button = {
  rounded: 'rounded-lg',
  variant: {
    primary: 'border border-transparent u-text-white u-bg-gray-800 hover:u-bg-gray-900 disabled:u-bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900',
    secondary: 'border u-border-gray-200 u-text-gray-700 u-bg-white hover:u-bg-gray-50 disabled:u-bg-white focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900',
    gray: 'border border-transparent u-text-gray-700 u-bg-gray-100 hover:u-bg-gray-200 disabled:u-bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900',
    link: 'border border-transparent u-text-gray-900 hover:underline focus:underline',
    'transparent-hover': 'border border-transparent u-text-gray-500 hover:u-text-white focus:u-text-white bg-transparent hover:u-bg-gray-900 focus:u-bg-gray-900 disabled:u-text-gray-500'
  }
}

const input = {
  appearance: {
    default: 'focus:ring-1 focus:u-ring-gray-900 focus:u-border-gray-900 bg-white dark:bg-gray-900 border u-border-gray-200 rounded-lg shadow-sm',
    darken: 'focus:ring-1 focus:u-ring-gray-900 focus:u-border-gray-900 u-bg-white border u-border-gray-200 rounded-lg shadow-sm'
  }
}

const textarea = {
  ...input
}

const select = {
  ...input
}

const selectCustom = {
  ...input
}

const toggle = {
  base: 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900 focus:ring-offset-white dark:focus:ring-offset-black',
  active: 'bg-gray-100 dark:bg-gray-800',
  inactive: 'bg-gray-100 dark:bg-gray-800',
  container: {
    base: 'pointer-events-none relative inline-block h-5 w-5 rounded-full u-bg-white shadow transform ring-0 transition ease-in-out duration-200'
  },
  icon: {
    on: 'h-3 w-3 u-text-gray-600',
    off: 'h-3 w-3 u-text-gray-400'
  }
}

const radio = {
  base: 'h-4 w-4 u-text-gray-900 focus:ring-2 focus:ring-offset-2 focus:u-ring-gray-900 focus:ring-offset-white dark:focus:ring-offset-black u-border-gray-200 dark:checked:border-primary-600 disabled:opacity-50 disabled:cursor-not-allowed'
}

const checkbox = {
  base: `${radio.base} rounded`
}

const card = {
  rounded: 'rounded-xl',
  background: 'bg-white dark:bg-gray-900'
}

const modal = {
  rounded: 'rounded-xl'
}

const container = {
  constrained: 'max-w-7xl'
}

export default {
  badge,
  button,
  input,
  textarea,
  select,
  selectCustom,
  toggle,
  radio,
  checkbox,
  card,
  modal,
  container
}
