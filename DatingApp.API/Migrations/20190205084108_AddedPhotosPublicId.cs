using Microsoft.EntityFrameworkCore.Migrations;

namespace DaingApp.API.Migrations
{
    public partial class AddedPhotosPublicId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "publicId",
                table: "Photo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "publicId",
                table: "Photo");
        }
    }
}
