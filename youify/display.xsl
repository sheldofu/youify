<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <table>
    <tr>
      <th>Artist</th>
      <th>Date</th>
      <th>Country</th>
      <th>City</th>
      <th>Venue</th>
      <th>Ticket Status</th>
      <th>Buy</th>
    </tr>
  <xsl:apply-templates select="events/event"/>
  </table>
  </body>
  </html>
</xsl:template>

<xsl:template match="events/event">
    <tr>
      <td><xsl:value-of select="artists/artist/name"/></td>
      <td>
        <xsl:call-template name="FormatDate">
          <xsl:with-param name="DateTime" select="datetime"/>
        </xsl:call-template>
      </td>
      <td><xsl:value-of select="venue/country"/></td>
      <td><xsl:value-of select="venue/city"/></td>
      <td><xsl:value-of select="venue/name"/></td>
      <td><xsl:value-of select="ticket_status"/></td>
      <td><a target="_blank" href="{ticket_url}">Buy Tickets</a></td>
    </tr>

</xsl:template>

<xsl:template name="FormatDate">
<xsl:param name="DateTime" />
<xsl:variable name="mo">
                <xsl:value-of select="substring($DateTime,6,2)" />
</xsl:variable>
<xsl:variable name="day">
                <xsl:value-of select="substring($DateTime,9,2)" />
  </xsl:variable>
<xsl:variable name="year">
                <xsl:value-of select="substring($DateTime,1,4)" />
</xsl:variable>
<xsl:variable name="time">
                <xsl:value-of select="substring($DateTime,12,8)" />
</xsl:variable>
<xsl:variable name="hh">
                <xsl:value-of select="substring($time,1,2)" />
</xsl:variable>
<xsl:variable name="mm">
                <xsl:value-of select="substring($time,4,2)" />
</xsl:variable>
<xsl:variable name="ss">
                <xsl:value-of select="substring($time,7,2)" />
</xsl:variable>
        <xsl:value-of select="$day"/>
        <xsl:value-of select="'-'"/>
        <xsl:value-of select="$mo"/>
        <xsl:value-of select="'-'"/>
        <xsl:value-of select="$year"/>
        <xsl:value-of select="', '"/>
        <xsl:value-of select="$hh"/>
        <xsl:value-of select="':'"/>
        <xsl:value-of select="$mm"/>
</xsl:template>


</xsl:stylesheet> 