import { Box, Button, Grid, Paper, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"

const RandomQuoteMachine = () => {
  const [data, setData] = useState(null)

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random")
      const { statusCode, statusMessage, ...data } = await response.json()
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`)
      setData(data)
    } catch (error) {
      console.error(error)
      setData({ content: "Opps... Something went wrong" })
    }
  }

  useEffect(() => {
    updateQuote()
  }, [])
  if (!data) return null

  return (
    <Paper
      component={Grid}
      className="quote-box"
      id="quote-box"
      container
      spacing={4}
      direction="column"
      justifyContent="space-around"
      alignItems="flex-end">
      <Grid item xs={12}>
        <Typography className="text" id="text" variant="subtitle1">
          <i class="fas fa-quote-left fa-xs" /> {data.content}
          <i class="fas fa-quote-right fa-xs" />
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography className="author" id="author" variant="body1">
          <Box fontStyle="italic" textAlign="right" m={1}>
            - {data.author}
          </Box>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item xs={3}>
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              encodeURIComponent(data.content + "\n -" + data.author)
            }
            id="tweet-quote"
            target="_blank"
            className="twit">
            <i className="fab fa-twitter" />
          </a>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="newquote"
            id="new-quote"
            variant="outlined"
            size="small"
            onClick={updateQuote}
            fullWidth
            style={{ textTransform: "none" }}>
            New Quote
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default RandomQuoteMachine
