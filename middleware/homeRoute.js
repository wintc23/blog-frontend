export default function ({ route, redirect }) {
  console.log('hello')
  if (route.fullPath == '/') {
    return redirect('/site/')
  }
}