import React from "react"
import renderer from "react-test-renderer"
import Header from "../header"
import { useStaticQuery } from "gatsby"

describe("Header", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => {
      return {
        site: {
          siteMetadata: {
            title: `Default Starter`,
          },
        },
      }
    })
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
