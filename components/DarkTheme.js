function DarkTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: black;
          --link-color: rgb(234, 207, 3);
          --text-color: rgb(230, 230, 230);
        }
      `}
    </style>
  );
}

export default DarkTheme;
